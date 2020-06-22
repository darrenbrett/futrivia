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

  async getNextTriviaSet(username: string, topic: string = 'starter') {
    const req = `users/next-set/${username}/${topic}`;
    let result: object;
    result = await this.apiService.sendRequest(req);
    this.triviaSet = result;
    return this.triviaSet;
  }

  async updatePlayersStats(username: string, lastCompletedSet, lastCompletedTopic: string, pointsToAdd) {
    const req = `users/update-user-stats`;
    let result: object;
    const body = {
      username,
      lastCompletedSet,
      lastCompletedTopic,
      pointsToAdd
    };
    console.log('body sending: ', body);
    result = await this.apiService.sendPostRequest(req, body);
  }

  async updateBonusQuestionStatus(username: string, qResult) {
    const req = `users/update-user-bonus`;
    let result: object;
    const body = {
      username,
      qResult
    };
    console.log('body sending: ', body);
    result = await this.apiService.sendPostRequest(req, body);
  }
}
