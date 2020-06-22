import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: [];

  constructor(private apiService: ApiService) { }

  async getUsers(username) {
    const req = `users/standings/${username}`;
    this.users = await this.apiService.sendRequest(req);
    return this.users;
  }

}
