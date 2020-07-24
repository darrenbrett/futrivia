import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {

  user: any;
  username: string;
  errorMsg: string;
  bonusQualified = false;
  bonusDeclined = false;
  rookieStatusComplete = false;
  playerSubscription: Subscription;

  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.username = user.username;
    } else {
      this.user = this.router.getCurrentNavigation().extras.state;
      this.username = this.user.username;
    }
    this.getPlayerStats();
  }

  ionViewWillEnter() {
    this.getPlayerStats();
  }

  getPlayerStats() {
    this.playerSubscription = this.mainService.getPlayerStats(this.username).subscribe(
      user => {
        this.user = user;
        console.log('this.user in main 43: ', this.user);
        this.checkRookieTopicCompletionStatus();
      },
      error => this.errorMsg = error,
    );
  }

  checkRookieTopicCompletionStatus() {
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

  declineBonusQuestion() {
    console.log('declineBonusQuestion() in main fired...');
    this.bonusDeclined = true;
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
  }

}
