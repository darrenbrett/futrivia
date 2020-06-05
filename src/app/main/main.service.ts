import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private apiService: ApiService) { }

  async getPlayerStats(username) {
    console.log('getPlayerStats() is firing: ', username);
    const req = `users/stats/${username}`;
    let result: object;
    result = await this.apiService.sendRequest(req);
    return result;
  }

}
