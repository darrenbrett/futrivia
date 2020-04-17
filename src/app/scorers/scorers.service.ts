import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ScorersService {

  scorers: [];

  constructor(private apiService: ApiService) { }

  async getScorers() {
    const req = `players/scorers`;
    this.scorers = await this.apiService.sendRequest(req);
    return this.scorers;
  }

}
