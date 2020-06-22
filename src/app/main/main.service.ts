import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private apiService: ApiService) { }

  async getPlayerStats(username) {
    const req = `users/stats/${username}`;
    let result: object;
    result = await this.apiService.sendRequest(req);
    return result;
  }

  async getBonusQuestion(username: string) {
    const req = `users/next-bonus/${username}`;
    let result: object;
    result = await this.apiService.sendRequest(req);
    return result;
  }

  async getUserTopics(username: string) {
    const req = `users/topic-sets-available/${username}`;
    let result: object;
    result = await this.apiService.sendRequest(req);
    return result[0];
  }

  async getTopicSpecs() {
    const req = `trivia-sets/topics/all`;
    const results = await this.apiService.sendRequest(req);
    return results;
  }

  async getSetsPerTopic(topic: string) {
    const req = `trivia-sets/topic-sets/${topic}`;
    const result: object = await this.apiService.sendRequest(req);
    return result[0];
  }

}
