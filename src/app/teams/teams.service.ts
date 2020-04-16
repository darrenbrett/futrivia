import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams: [];

  constructor(private apiService: ApiService) { }

  async getTeams() {
    const req = `teams`;
    this.teams = await this.apiService.getRequest(req);
    return this.teams;
  }
}
