import { Component, OnInit } from '@angular/core';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  constructor(private playersService: PlayersService) { }

  players: [];

  async getPlayers() {
    this.players = await this.playersService.getPlayers();
  }

  ngOnInit() {
    this.getPlayers();
  }
}
