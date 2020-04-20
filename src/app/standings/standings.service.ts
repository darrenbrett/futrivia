import { Injectable } from '@angular/core';
import { Standings } from './standings.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private apiService: ApiService) { }

  async getStandingsByConference(conference) {
    let standings: any = [];
    const req = `standings/${conference}`;
    standings = await this.apiService.sendRequest(req);
    return standings;
  }
}
