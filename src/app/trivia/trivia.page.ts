import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmationPage } from './confirmation/confirmation.page';
import { TriviaService } from './trivia.service';
import { NgForm } from '@angular/forms';
import { timer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit, OnDestroy {

  constructor(
    private modalCtlr: ModalController,
    private triviaService: TriviaService,
    private router: Router,
    private navService: NavigationService) {}

  answers = [];
  finalAnswers = [];
  answersSubmitted = false;
  user;
  username: string;
  triviaSet;
  pointsToAdd = 0;
  topic;
  lastCompletedTopic: string;

  countDown: Subscription;
  counter = 90;
  tick = 1000;

  async ngOnInit() {
    const userStr = localStorage.getItem('currentUser');
    this.user = JSON.parse(userStr);
    this.username = this.user.username;
    this.topic = this.router.getCurrentNavigation().extras.state || { topic: 'starter' };
    this.lastCompletedTopic = this.topic.topic;
    console.log('this.topic.topic 43: ', this.topic.topic);
    this.triviaSet = await this.triviaService.getNextTriviaSet(this.username, this.topic.topic);
    console.log('this.triviaSet: ', this.triviaSet);

    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }

  ngOnDestroy() {
    this.countDown = null;
  }

  onTimeOut() {
    if (this.counter < 1) {
      this.answersSubmitted = true;
      this.showModal();
      this.updatePlayerStats();
    }
  }

  getSelection(qNum, qSelection) {
    let answersArr = [];
    if (this.answers.length < 1) {
      this.answers.push({qNum, qSelection});
      answersArr = [...this.answers];
    }
    for (const i of this.answers) {
      if (i.qNum === qNum) {
        const filteredArr = this.answers.filter(i => i.qNum !== qNum);
        filteredArr.push({qNum, qSelection});
        this.answers = [...filteredArr];
        answersArr = [...this.answers];
      } else if (i.qNum !== qNum) {
        this.answers.push({qNum, qSelection});
        answersArr = [...this.answers];
      }
      this.finalAnswers = [...answersArr];
    }
  }

  async getScore() {
    let score = 0;
    for (const u of this.answers) {
      for (const q of this.triviaSet.questions) {
        if (u.qSelection === q.answer && (u.qNum + 1) === q.qid) {
          score++;
        }
      }
    }
    this.pointsToAdd = score;
    console.log('score: ', score);
    return score;
  }

  async showModal() {
    const modal = await this.modalCtlr.create({
      component: ConfirmationPage,
      componentProps: {
        score: await this.getScore()
      }
    });
    return await modal.present();
  }

  submitAnswers(form: NgForm) {
    console.log('submitAnsers() is firing...');
    this.answersSubmitted = true;
    form.reset();
    this.showModal();
    this.updatePlayerStats();
  }

  updatePlayerStats() {
    console.log('this.topic: ', this.topic);
    this.triviaService.updatePlayersStats(this.username, this.triviaSet.set, this.lastCompletedTopic, this.pointsToAdd);
  }

  returnToMain() {
    this.navService.navigateHome();
  }

}

