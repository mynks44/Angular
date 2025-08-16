import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule]
})
export class Tab3Page {
  username = '';
  password = '';
  message = '';
  loading = false;

  private base = 'http://localhost:3000';

  constructor(private http: HttpClient, private toast: ToastController) {}

  async login() {
    if (!this.validateInputs()) return;
    await this.call(`${this.base}/login`, 'Login success ✅', 'Login failed');
  }

  async signup() {
    if (!this.validateInputs(true)) return; 
    await this.call(`${this.base}/signup`, 'Signup success 🎉', 'Signup failed');
  }

  private async call(url: string, okMsg: string, failMsg: string) {
    this.loading = true; this.message = '';
    this.http.post<{message?: string}>(url, {
      username: this.username.trim(),
      password: this.password
    }).subscribe({
      next: async (res) => {
        this.loading = false;
        this.message = res?.message || okMsg;
        await this.showToast(this.message);
      },
      error: async (err) => {
        this.loading = false;
        const msg =
          err?.error?.message ??
          err?.error?.error ??     
          err?.message ??          
          failMsg;
        this.message = msg;
        await this.showToast(msg);
        console.log('Auth error:', err); 
      }
    });
  }

  private validateInputs(enforceMin = false): boolean {
    if (!this.username || !this.password) {
      this.message = 'Enter username & password';
      this.showToast(this.message);
      return false;
    }
    if (enforceMin && this.password.length < 6) {
      this.message = 'Password must be at least 6 characters';
      this.showToast(this.message);
      return false;
    }
    return true;
  }

  private async showToast(msg: string) {
    const t = await this.toast.create({ message: msg, duration: 1600, position: 'bottom' });
    await t.present();
  }
}
