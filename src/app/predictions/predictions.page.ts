import { Component, OnInit } from '@angular/core';
import { PredictionsService } from './predictions.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmationPage } from './confirmation/confirmation.page';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.page.html',
  styleUrls: ['./predictions.page.scss'],
})
export class PredictionsPage implements OnInit {

  userId: '5ea6d3be4f667327c1317be4';
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

  constructor(
    private predictionsService: PredictionsService,
    private router: Router,
    private modalCtlr: ModalController
  ) { }

  async showModal() {
    const modal = await this.modalCtlr.create({
      component: ConfirmationPage
    });
    await modal.present();
  }

  async getCurrentRound() {
    this.currentRound = await this.predictionsService.getCurrentRound();
    this.games = this.currentRound.games;
    this.year = this.currentRound.year;
    this.round = this.currentRound.round;
  }

  makeFirstSelection(team, choice) {
    console.log('makeSelection() clicked: ', team, choice);
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.firstSelected = 'away';
    } else if (choice === 'tie') {
      this.firstSelected = 'tie';
    } else if (choice === 'home') {
      this.firstSelected = 'home';
    }
    console.log('choice: ', choice);
  }

  makeSecondSelection(team, choice) {
    console.log('makeSelection() clicked: ', team, choice);
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.secondSelected = 'away';
    } else if (choice === 'tie') {
      this.secondSelected = 'tie';
    } else if (choice === 'home') {
      this.secondSelected = 'home';
    }
    console.log('choice: ', choice);
  }

  makeThirdSelection(team, choice) {
    console.log('makeSelection() clicked: ', team, choice);
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.thirdSelected = 'away';
    } else if (choice === 'tie') {
      this.thirdSelected = 'tie';
    } else if (choice === 'home') {
      this.thirdSelected = 'home';
    }
    console.log('choice: ', choice);
  }

  makeFourthSelection(team, choice) {
    console.log('makeSelection() clicked: ', team, choice);
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.fourthSelected = 'away';
    } else if (choice === 'tie') {
      this.fourthSelected = 'tie';
    } else if (choice === 'home') {
      this.fourthSelected = 'home';
    }
    console.log('choice: ', choice);
  }

  makeFifthSelection(team, choice) {
    console.log('makeSelection() clicked: ', team, choice);
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.fifthSelected = 'away';
    } else if (choice === 'tie') {
      this.fifthSelected = 'tie';
    } else if (choice === 'home') {
      this.fifthSelected = 'home';
    }
    console.log('choice: ', choice);
  }

  makeSixthSelection(team, choice) {
    console.log('makeSelection() clicked: ', team, choice);
    const selection = { team, choice };
    this.selections.push(selection);
    if (choice === 'away') {
      this.sixthSelected = 'away';
    } else if (choice === 'tie') {
      this.sixthSelected = 'tie';
    } else if (choice === 'home') {
      this.sixthSelected = 'home';
    }
    console.log('choice: ', choice);
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
      userId: '5ea6d3be4f667327c1317be4',
      year: this.year,
      round: this.round,
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
    this.getCurrentRound();
  }

}
