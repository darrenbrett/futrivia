import { Component, OnInit } from '@angular/core';
import { StandingsService } from './standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
})
export class StandingsPage implements OnInit {
  easternStandings = [];
  westernStandings = [];

  constructor(private standingsService: StandingsService) { }

  async getStandings() {
    this.easternStandings = await this.standingsService.getStandingsByConference('east');
    this.westernStandings = await this.standingsService.getStandingsByConference('west');
  }

  ngOnInit() {
    this.getStandings();
  }

}
