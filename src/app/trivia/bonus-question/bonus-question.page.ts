import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { MainService } from 'src/app/main/main.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TriviaService } from '../trivia.service';
import { BonusResultPage } from './bonus-result/bonus-result.page';

@Component({
  selector: 'app-bonus-question',
  templateUrl: './bonus-question.page.html',
  styleUrls: ['./bonus-question.page.scss'],
})
export class BonusQuestionPage implements OnInit, OnDestroy {
  user;
  result = 'incorrect';
  bonusQuestion;
  answers = [];
  finalAnswer;
  answersSubmitted = false;
  errorMsg: string;

  constructor(
    private router: Router,
    private modalCtlr: ModalController,
    private triviaService: TriviaService,
    private mainService: MainService) { }

  countDown: Subscription;
  counter = 20;
  tick = 1000;

  ngOnInit() {
    this.user = this.router.getCurrentNavigation().extras.state;
    console.log('this.user: ', this.user);
    this.mainService.getBonusQuestion(this.user.user.username).subscribe(
      bonusQuestion => this.bonusQuestion = bonusQuestion,
      error => this.errorMsg = error
    );
    console.log('this.bonusQuestion: ', this.bonusQuestion);
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }

  ngOnDestroy() {
    this.countDown = null;
  }

  onTimeOut() {
    if (this.counter < 1) {
      this.answersSubmitted = true;
      this.showModal();
      this.updateBonusQuestionStatus();
    }
  }

  getSelection(selection) {
    this.finalAnswer = selection;
  }

  async getResult() {
    let result;
    console.log('Correct Answer: ', this.bonusQuestion.answer);
    if (this.finalAnswer === this.bonusQuestion.answer) {
      result = 'correct';
    } else if (this.finalAnswer !== this.bonusQuestion.answer) {
      result = 'incorrect';
    }
    this.result = result;
    return result;
  }

  async showModal() {
    const modal = await this.modalCtlr.create({
      component: BonusResultPage,
      componentProps: {
        result: await this.getResult()
      }
    });
    return await modal.present();
  }

  submitAnswers(form: NgForm) {
    console.log('submitAnsers() is firing...');
    this.answersSubmitted = true;
    form.reset();
    this.getResult();
    this.showModal();
    this.updateBonusQuestionStatus();
  }

  updateBonusQuestionStatus() {
    this.triviaService.updateBonusQuestionStatus(this.user.user.username, this.result);
  }

}
