import { Injectable } from '@angular/core';
import { ApiService } from '../api/api';

@Injectable({ providedIn: 'root' })
export class Auth {
  private tokenKey = 'token';

  constructor(private api: ApiService) {}

  login(email: string, password: string) {
    return this.api.post('/auth/login', { email, password });
  }

  signup(payload: any) {
    return this.api.post('/auth/signup', payload);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getRole() {
    const token = this.getToken();
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1])); // decode JWT
    return payload.role;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
