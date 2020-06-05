import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: [];

  constructor(private apiService: ApiService) { }

  async getPlayers() {
    const req = `players/standings`;
    this.players = await this.apiService.sendRequest(req);
    return this.players;
  }

}
