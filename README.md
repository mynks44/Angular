# Angular + Ionic Projects (with Node/Express + MongoDB examples)

A collection of **Angular** and **Ionic** projects, including a reusable **Node/Express + MongoDB** backend pattern.  
This repo is organized as multiple sub-projects (each in its own folder). Some are frontend-only; some are full-stack.

---

## Contents

- Multiple Angular/Ionic apps (standalone components & routes).
- Optional Express/Mongoose backends for CRUD APIs.
- Reusable patterns: HttpClient with Observables, routing, forms, alerts, theming, and mobile builds via Capacitor.

> Tip: each project folder contains its own `package.json`. Backends typically live in a sibling folder with `server.js`, `models/`, and `routes/`.

---

## Requirements

- **Node.js** ≥ 18 (works on 20/24)
- **npm** ≥ 9
- **Ionic CLI**: `npm i -g @ionic/cli`
- **MongoDB** (Atlas recommended) for projects that use a database

---

## Quick Start

Pick a project folder (e.g., `Project_X/`). Most Angular/Ionic apps follow this:

```bash
# Frontend
cd <project-folder>
npm install
ionic serve   # dev server → http://localhost:8100

If the project has a backend in a sibling folder (e.g., ../backend/):

# Backend
cd <backend-folder>
npm install
# create .env (see below)
npm start     # API → http://localhost:5000

Some projects include a one-command runner from the frontend folder:

npm run start:all   # runs backend + ionic serve together



Environment Variables (for backends)
Create a .env file in the backend folder:

MONGO_URI=mongodb+srv://<USER>:<PASSWORD>@<CLUSTER>.mongodb.net/<DB>?retryWrites=true&w=majority
PORT=5000


Do not commit real secrets. Commit a safe example as .env.example:

MONGO_URI=replace-with-your-atlas-connection-string
PORT=5000


Standard Backend Layout (Express + Mongoose)

backend/
├─ server.js              # Express app, CORS, JSON, logging, routes
├─ package.json
├─ .env                   # not committed
├─ models/
│  └─ item.js             # example schema
└─ routes/
   └─ itemRoutes.js       # CRUD endpoints


server.js (essentials)

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api/items', require('./routes/itemRoutes'));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 API listening on http://localhost:${process.env.PORT || 5000}`)
  );
});



Standard Frontend Layout (Ionic + Angular)

<project>/
├─ package.json
└─ src/
   ├─ app/
   │  ├─ pages/                # main / listing / update (examples)
   │  ├─ services/api.service.ts
   │  └─ app-routing.module.ts # standalone routes
   ├─ assets/
   └─ global.scss



HttpClient + Observables (example)

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'http://localhost:5000/api/items';
  constructor(private http: HttpClient) {}
  list(): Observable<Item[]>          { return this.http.get<Item[]>(this.base); }
  create(dto: Partial<Item>)          { return this.http.post(this.base, dto); }
  update(id: string, dto: Partial<Item>) { return this.http.put(`${this.base}/${id}`, dto); }
  remove(id: string)                  { return this.http.delete(`${this.base}/${id}`); }
  removeAll()                         { return this.http.delete(this.base); }
}



Standalone routing (Angular 15+)

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',    loadComponent: () => import('./pages/main/main.page').then(m => m.MainPage) },
  { path: 'listing', loadComponent: () => import('./pages/listing/listing.page').then(m => m.ListingPage) },
  { path: 'update',  loadComponent: () => import('./pages/update/update.page').then(m => m.UpdatePage) },
  { path: 'update/:id', loadComponent: () => import('./pages/update/update.page').then(m => m.UpdatePage) },
  { path: '**', redirectTo: 'main' }
];



Typical UI components

ion-menu, ion-header, ion-toolbar, ion-title

ion-content, ion-list, ion-item, ion-label

ion-input, ion-textarea, ion-button, ion-icon

ion-toast, ion-alert, ion-fab


One-Command Dev Script (optional)
Add to the frontend package.json if a backend lives one level up:

{
  "scripts": {
    "backend": "npm --prefix .. run start",
    "start:all": "concurrently -n BACKEND,FRONTEND -c blue,green \"npm run backend\" \"ionic serve\""
  },
  "devDependencies": { "concurrently": "^9.2.0" }
}


Make sure the backend package.json has:

{ "scripts": { "start": "node server.js" } }


Build
Web build (Angular/Ionic)

ionic build       # outputs to www/ or dist/


Mobile (Capacitor)

ionic cap add android   # or ios (on macOS)
ionic build
ionic cap copy
ionic cap open android


Testing & Linting

# frontend
npm test             # Jasmine/Karma if configured
npm run lint         # Angular ESLint if configured

# backend
npm run lint         # if ESLint configured


Troubleshooting
Frontend HttpErrorResponse status: 0
Backend not reachable. Confirm it’s running and the URL matches exactly (http://localhost:5000/...).

CORS error
Ensure app.use(cors()) is before route mounting in server.js.

Mongo connect error
Check MONGO_URI, database user credentials, and Atlas Network Access (“Allow from anywhere” during development).

Port already in use
Stop previous dev servers or change PORT in .env.

Module not found (e.g., morgan)
npm i morgan (or remove the middleware).



Git Hygiene

# .gitignore (root of each project)
node_modules/
www/
dist/
.tmp/
.vscode/
.DS_Store
Thumbs.db
.env
.env.*
!.env.example
Keep secrets out of git; commit only .env.example.

License
MIT — use freely for learning and prototyping.

If you want this tailored to the exact folder names in your repo (e.g., add a tiny table describing each sub-folder), tell me the names you want shown and I’ll drop them into the README without mentioning any course or assignment.
