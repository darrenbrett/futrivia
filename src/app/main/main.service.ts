import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private apiService: ApiService) { }

  getPlayerStats(username: string) {
    const req = `users/stats/${username}`;
    return this.apiService.sendRequest(req);
  }

  getBonusQuestion(username: string) {
    const req = `users/next-bonus/${username}`;
    return this.apiService.sendRequest(req);
  }

}
