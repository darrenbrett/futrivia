import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmationPage } from './confirmation/confirmation.page';
import { TriviaService } from './trivia.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit {

  constructor(private modalCtlr: ModalController, private triviaService: TriviaService) {}

  answers = [];
  finalAnswers = [];
  answersSubmitted = false;
  user;
  username: string;
  triviaSet;
  pointsToAdd = 0;

  async ngOnInit() {
    const userStr = localStorage.getItem('currentUser');
    this.user = JSON.parse(userStr);
    this.username = this.user.username;
    this.triviaSet = await this.triviaService.getNextTriviaSet(this.username);
    console.log('this.triviaSet: ', this.triviaSet);
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
        if (u.qSelection === q.answer && u.qNum === q.qid) {
          score++;
        }
      }
    }
    this.pointsToAdd = score;
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
    this.answersSubmitted = true;
    form.reset();
    this.showModal();
    this.updatePlayerStats();
  }

  updatePlayerStats() {
    console.log('updatePlayerStats() is firing...');
    this.triviaService.updatePlayersStats(this.username, this.triviaSet.set, this.pointsToAdd);
  }

}
