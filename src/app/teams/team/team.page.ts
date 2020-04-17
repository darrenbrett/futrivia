import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss', '../teams.page.scss'],
})
export class TeamPage implements OnInit {

  team;
  players = [];

  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  async getTeamByLocation(location) {
    const team = await this.teamsService.getTeamByLocation(location);
    console.log('this.team 19: ', this.team);
    return team;
  }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('location')) {
        // redirect
        return;
      }
      const location = paramMap.get('location');
      this.team = await this.getTeamByLocation(location.charAt(0).toUpperCase() + location.slice(1));
    });
  }

}
