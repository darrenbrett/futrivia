import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { Result } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user;

  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get currentUser() {
    return this.user;
  }

  constructor(private apiService: ApiService, private router: Router) { }

  async signUp(creds) {
    const req = `users/signup`;
    let result: Result;
    result = await this.apiService.sendPostRequest(req, creds);
    this.user = result.user;
    if (result && result.message === 'This email address already exists') {
      const message = 'This email address already exists.';
      return message;
    } else if (result && result.message === 'New user created successfully!') {
      console.log('Successful signup!');
      this._userIsAuthenticated = true;
      this.router.navigateByUrl('/auth', {
        state: { email: creds.email, password: creds.password }
      });
    }
  }

  async login(creds: {}) {
    console.log('login firing...');
    const req = `users/login`;
    let result: Result;
    result = await this.apiService.sendPostRequest(req, creds);
    if (result && result.message !== 'Auth failed') {
      this._userIsAuthenticated = true;
      // Store userDetails in localStorage
      localStorage.setItem('currentUser', JSON.stringify(result.user));
      this.router.navigateByUrl('standings', {
        state: { user: result.user }
      });
    } else if (result && result.message === 'Auth failed') {
      this._userIsAuthenticated = false;
      const message = 'Login failed';
      return message;
    }
  }

  logout() {
    this._userIsAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
}
