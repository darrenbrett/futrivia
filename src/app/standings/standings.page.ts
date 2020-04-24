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
  overallStandings = [];

  overall = false;

  constructor(private standingsService: StandingsService) { }

  async getConferenceStandings() {
    this.easternStandings = await this.standingsService.getStandingsByConference('east');
    this.westernStandings = await this.standingsService.getStandingsByConference('west');
  }

  async getOverallStandings() {
    this.overallStandings = await this.standingsService.getOverallStandings();
  }

  showOverallStandings() {
    this.overall = true;
  }

  showConferenceStandings() {
    this.overall = false;
  }

  ngOnInit() {
    this.getConferenceStandings();
    this.getOverallStandings();
  }

}
