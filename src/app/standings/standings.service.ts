import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private apiService: ApiService) { }

  async getStandingsByConference(conference) {
    let standings: any = [];
    const req = `teams/standings/${conference}`;
    standings = await this.apiService.sendRequest(req);
    return standings;
  }

  async getOverallStandings() {
    let standings: any = [];
    const req = `teams/standings/overall`;
    standings = await this.apiService.sendRequest(req);
    return standings;
  }
}
