import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(private apiService: ApiService, private router: Router) { }

  async login(body) {
    const req = `users/login`;
    let result = {
      message: ''
    };
    result = await this.apiService.sendPostRequest(req, body);
    if (result && result.message !== 'Auth failed') {
      this._userIsAuthenticated = true;
      this.router.navigateByUrl('/standings');
      const message = 'Login successful!';
      return message;
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
