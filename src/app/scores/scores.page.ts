import { Component, OnInit } from '@angular/core';
import { ScoresService } from './scores.service';
import { Scores } from './scores.model';
import { TeamsService } from '../teams/teams.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {
  scores: Scores[] = [];

  constructor(private scoresService: ScoresService, private teamsService: TeamsService) { }

  async getLatestScores() {
    this.scores = await this.scoresService.getLatestScores();
    return this.scores;
  }

  ngOnInit() {
    this.getLatestScores();
  }

}
