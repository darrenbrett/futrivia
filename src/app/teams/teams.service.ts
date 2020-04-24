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

  async getTeamLogos() {
    let teamLogos: [];
    const req = `teams/logos`;
    teamLogos = await this.apiService.sendRequest(req);
    return teamLogos;
  }

  async getTeamByLocation(location) {
    let team: any = {};
    const req = `teams/${location}`;
    team = await this.apiService.sendRequest(req);
    return team;
  }
}
