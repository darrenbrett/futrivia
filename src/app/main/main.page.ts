import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  user;
  username: string;
  userStats;

  constructor(private router: Router, private mainService: MainService) { }

  user1 = {
    name: 'David Smith',
    puzzlesCompleted: 33,
    weeklyPoints: 14,
    monthlyPoints: 28,
    yearlyPoints: 84,
    position: 15,
    featuresUnlocked: [
      { feature: 'AfterBurner' },
      { feature: 'Monthly Champion' }
    ],
    roundsRemaining: 2
  };

  ngOnInit() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.username = user.username;
    } else {
      this.user = this.router.getCurrentNavigation().extras.state;
      this.username = this.user.user.username;
    }
    this.getPlayerStats();
  }

  async loadNextRound() {
    this.router.navigateByUrl('trivia');
  }

  async getPlayerStats() {
    this.userStats = await this.mainService.getPlayerStats(this.username);
    console.log('this.userStats: ', this.userStats);
  }

}
