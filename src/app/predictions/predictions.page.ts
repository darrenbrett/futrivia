import { Component, OnInit } from '@angular/core';
import { PredictionsService } from './predictions.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmationPage } from './confirmation/confirmation.page';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.page.html',
  styleUrls: ['./predictions.page.scss'],
})
export class PredictionsPage implements OnInit {
  user: any;
  userId: string;
  currentRound;
  games = [];
  year = '';
  round = '';

  selections = [];
  firstSelected = '';
  secondSelected = '';
  thirdSelected = '';
  fourthSelected = '';
  fifthSelected = '';
  sixthSelected = '';

  selectionsComplete = false;
  selectionsSubmitted = false;
  completed = false;

  constructor(
    private predictionsService: PredictionsService,
    private router: Router,
    private modalCtlr: ModalController
  ) { }

  async hasUserSubmittedRoundPredictions() {
    const isCompleted = await this.predictionsService.hasUserSubmittedRoundPredictions(this.user._id);
    this.completed = isCompleted;
  }

  async showModal() {
    const modal = await this.modalCtlr.create({
      component: ConfirmationPage
    });
    await modal.present();
  }

  async getCurrentRound() {
    this.currentRound = await this.predictionsService.getCurrentRound();
    console.log(this.currentRound);
    this.games = this.currentRound.games;
    this.year = this.currentRound.year;
    this.round = this.currentRound.round;
  }

  makeFirstSelection(team, choice) {
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.firstSelected = 'away';
    } else if (choice === 'tie') {
      this.firstSelected = 'tie';
    } else if (choice === 'home') {
      this.firstSelected = 'home';
    }
  }

  makeSecondSelection(team, choice) {
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.secondSelected = 'away';
    } else if (choice === 'tie') {
      this.secondSelected = 'tie';
    } else if (choice === 'home') {
      this.secondSelected = 'home';
    }
  }

  makeThirdSelection(team, choice) {
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.thirdSelected = 'away';
    } else if (choice === 'tie') {
      this.thirdSelected = 'tie';
    } else if (choice === 'home') {
      this.thirdSelected = 'home';
    }
  }

  makeFourthSelection(team, choice) {
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.fourthSelected = 'away';
    } else if (choice === 'tie') {
      this.fourthSelected = 'tie';
    } else if (choice === 'home') {
      this.fourthSelected = 'home';
    }
  }

  makeFifthSelection(team, choice) {
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.fifthSelected = 'away';
    } else if (choice === 'tie') {
      this.fifthSelected = 'tie';
    } else if (choice === 'home') {
      this.fifthSelected = 'home';
    }
  }

  makeSixthSelection(team, choice) {
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.sixthSelected = 'away';
    } else if (choice === 'tie') {
      this.sixthSelected = 'tie';
    } else if (choice === 'home') {
      this.sixthSelected = 'home';
    }
  }

  areSelectionsMade() {
    if (this.firstSelected &&
       this.secondSelected &&
       this.thirdSelected &&
       this.fourthSelected &&
       this.fifthSelected &&
       this.sixthSelected) {
      this.selectionsComplete = true;
    }
    return this.selectionsComplete;
  }

  clearSelections() {
    this.firstSelected = '';
    this.secondSelected = '';
    this.thirdSelected = '';
    this.fourthSelected = '';
    this.fifthSelected = '';
    this.sixthSelected = '';
  }

  async saveSelections() {
    const predictionObj = {
      userId: this.user._id,
      year: this.year,
      round: this.round,
      completed: true,
      predictions: [
        this.selections
      ]
    };

    this.selectionsSubmitted = true;
    this.clearSelections();
    this.selectionsSubmitted = false;
    await this.predictionsService.sendUserPredictions(predictionObj);
    this.router.navigateByUrl('/standings');
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.getCurrentRound();
    this.hasUserSubmittedRoundPredictions();
  }

}
