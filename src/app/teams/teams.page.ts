import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams = [];

  constructor(private teamsService: TeamsService) { }

  async getTeams() {
    this.teams = await this.teamsService.getTeams();
    this.teams.sort((a, b) => {
      return a.name.location.localeCompare(b.name.location);
    });
  }

  ngOnInit() {
    this.getTeams();
  }

}
