import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  constructor(private apiService: ApiService) { }

  year: string;
  round: string;

  async getCurrentRound() {
    let currentRound: any = {};
    const req = `rounds/current`;
    currentRound = await this.apiService.sendRequest(req);
    return currentRound;
  }

  async hasUserSubmittedRoundPredictions(userId) {
    const roundReq = await this.getCurrentRound();
    const round = roundReq.round;
    console.log('userId: ', userId);
    console.log('round: ', round);
    let roundPredictions: any = {};
    const req = `users/check-predictions`;
    const body = {
      userId,
      round
    };
    roundPredictions = await this.apiService.sendPostRequest(req, body);
    return roundPredictions;
  }

  async sendUserPredictions(predictionObj) {
    const req = `users/predictions`;
    try {
      await this.apiService.sendPostRequest(req, predictionObj);
    } catch (error) {
      console.log(error);
      const message = 'Unable to save predictions.';
      return {
        error,
        message
      };
    }
  }
}
