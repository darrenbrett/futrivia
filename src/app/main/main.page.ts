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

  rookieStatusComplete = false;

  constructor(private router: Router, private mainService: MainService) { }

  async ngOnInit() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.username = user.username;
    } else {
      this.user = this.router.getCurrentNavigation().extras.state;
      this.username = this.user.user.username;
    }
    await this.getPlayerStats();
  }

  async ionViewWillEnter() {
    await this.getPlayerStats();
  }

  async getPlayerStats() {
    this.user = await this.mainService.getPlayerStats(this.username);
    console.log('this.user: ', this.user);
    this.checkRookieTopicCompletionStatus();
  }

  async checkRookieTopicCompletionStatus() {
    for (const topic of this.user.topics) {
      if (topic.topic !== 'starter' && topic.setsRemaining > 0) {
        console.log('topic with sets remaining: ', topic);
        return this.rookieStatusComplete = false;
      } else if (topic.setsRemaining === 0) {
        this.rookieStatusComplete = true;
        console.log('this.rookieStatusComplete: ', this.rookieStatusComplete);
      }
    }
  }

  playTopicalRound(topic) {
    const joinedTopicStr  = topic.replace(/\s/g, '');
    this.router.navigateByUrl('/trivia', {
      state: { topic: joinedTopicStr }
    });
  }

  async launchBonusQuestion() {
    this.router.navigateByUrl('/bonus-question', {
      state: { user: this.user }
    });
    this.bonusDeclined = true;
  }

  declineBonusQuestion() {
    this.bonusDeclined = true;
  }

}
