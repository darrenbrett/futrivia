import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    console.log('userIsAuthenticated: ', this._userIsAuthenticated);
    return this._userIsAuthenticated;
  }

  constructor(private apiService: ApiService, private router: Router) { }

  login() {
    this._userIsAuthenticated = true;
    this.router.navigateByUrl('/standings');
  }

  logout() {
    this._userIsAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
}
