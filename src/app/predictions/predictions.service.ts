import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  constructor(private apiService: ApiService) { }

  async getCurrentRound() {
    let currentRound: any = {};
    let games: any = [];
    const req = `rounds/current`;
    currentRound = await this.apiService.sendRequest(req);
    games = currentRound.games;
    return games;
  }
}
