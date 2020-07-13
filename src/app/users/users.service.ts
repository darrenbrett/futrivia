import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: [];

  constructor(private apiService: ApiService) { }

  getUsers(username: string) {
    const req = `users/standings/${username}`;
    return this.apiService.sendRequest(req);
  }

}
