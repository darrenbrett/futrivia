import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private apiService: ApiService) { }

  async getLatestScores() {
    let scores: any = [];
    const req = `games/latest`;
    scores = await this.apiService.sendRequest(req);
    scores.reverse();
    return scores;
  }
}
