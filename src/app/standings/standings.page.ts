import { Component, OnInit } from '@angular/core';
import { StandingsService } from './standings.service';
import { Router } from '@angular/router';

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

  constructor(private standingsService: StandingsService, private router: Router) { }

  async getConferenceStandings() {
    this.easternStandings = await this.standingsService.getStandingsByConference('east');
    this.westernStandings = await this.standingsService.getStandingsByConference('west');
  }

  async getOverallStandings() {
    this.overallStandings = await this.standingsService.getOverallStandings();
    console.log(this.overallStandings);
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
