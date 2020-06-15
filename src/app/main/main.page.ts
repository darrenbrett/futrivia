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

  bonusQualified = false;
  bonusDeclined = false;

  triviaTopics = [
    'La Liga',
    'Premier League',
    'World Cup'
  ];

  constructor(private router: Router, private mainService: MainService) { }

  async ngOnInit() {
    console.log('ngInit() running...');
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.username = user.username;
    } else {
      this.user = this.router.getCurrentNavigation().extras.state;
      console.log('this.user 38: ', this.user);
      this.username = this.user.user.username;
    }
    await this.getPlayerStats();
    this.checkBonusQualification();
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter() firing...');
    await this.getPlayerStats();
  }

  checkBonusQualification() {
    this.bonusQualified = true;
    // if (this.userStats.roundsCompleted === 5) {
    //   this.bonusQualified = true;
    // }
  }

  async getPlayerStats() {
    this.userStats = await this.mainService.getPlayerStats(this.username);
    console.log('this.userStats: ', this.userStats);
  }

  playTopicalRound(topic) {
    const joinedTopicStr  = topic.replace(/\s/g, '');
    this.router.navigateByUrl('/trivia', {
      state: { topic: joinedTopicStr }
    });
  }

  launchBonusQuestion(userStats) {
    console.log('launchBonusChallenge() firing...');
  }

  declineBonusQuestion() {
    console.log('declineBonusQuestion() firing...');
    this.bonusDeclined = true;
  }

}