import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private apiService: ApiService) { }

  async getTeams() {
    let teams: [];
    const req = `teams`;
    teams = await this.apiService.sendRequest(req);
    return teams;
  }

  async getTeamByLocation(location) {
    let team: any = {};
    const req = `teams/${location}`;
    team = await this.apiService.sendRequest(req);
    return team;
  }
}
