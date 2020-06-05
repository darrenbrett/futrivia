import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { Result } from '../auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private triviaSet;

  constructor(private apiService: ApiService, private router: Router) { }

  async getNextTriviaSet(username) {
    const req = `users/next-set/${username}`;
    let result: object;
    result = await this.apiService.sendRequest(req);
    console.log('result: ', result);
    this.triviaSet = result;
    return this.triviaSet;
  }

  async updatePlayersStats(username, lastCompletedSet, pointsToAdd) {
    const req = `users/update-user-stats`;
    let result: object;
    const body = {
      username,
      lastCompletedSet,
      pointsToAdd
    };
    result = await this.apiService.sendPostRequest(req, body);
  }
}
