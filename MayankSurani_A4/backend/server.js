const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

app.use(cors({ origin: ['http://localhost:8100', 'http://localhost:4200'] }));
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { dbName: 'MayankSuraniA4' });
mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('error', (err) => console.error('Mongo error', err));

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);
const Item = mongoose.model('Item', itemSchema);

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  passwordHash: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => res.send('API is running ✅'));
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('/api/items', async (req, res, next) => {
  try {
    const items = await Item.find().lean();
    res.json(items);
  } catch (e) {
    next(e);
  }
});

app.post('/api/items', async (req, res, next) => {
  try {
    const { name, price } = req.body;
    if (!name || price == null) {
      return res.status(400).json({ message: 'name and price required' });
    }
    const newItem = await Item.create({ name, price });
    res.status(201).json({ message: 'Item added', id: newItem._id });
  } catch (e) {
    next(e);
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username?.trim() || !password) {
      return res.status(400).json({ message: 'username & password required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'password must be at least 6 chars' });
    }

    const exists = await User.findOne({ username: username.trim() }).lean();
    if (exists) return res.status(409).json({ message: 'User already exists' });

    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ username: username.trim(), passwordHash });

    res.status(201).json({ message: 'Signup success 🎉' });
  } catch (e) {
    if (e?.code === 11000) return res.status(409).json({ message: 'User already exists' });
    console.error('Signup error:', e);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username?.trim() || !password) {
      return res.status(400).json({ message: 'username & password required' });
    }

    const user = await User.findOne({ username: username.trim() });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login success ✅' });
  } catch (e) {
    console.error('Login error:', e);
    res.status(500).json({ message: 'Server error during login' });
  }
});

app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
