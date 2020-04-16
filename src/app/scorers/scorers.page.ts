import { Component, OnInit } from '@angular/core';
import { ScorersService } from './scorers.service';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.page.html',
  styleUrls: ['./scorers.page.scss'],
})
export class ScorersPage implements OnInit {

  constructor(private scorersService: ScorersService) { }

  scorers: [];

  async getScorers() {
    this.scorers = await this.scorersService.getScorers();
  }

  ngOnInit() {
    this.getScorers();
  }
}
