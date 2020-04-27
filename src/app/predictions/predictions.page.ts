import { Component, OnInit } from '@angular/core';
import { PredictionsService } from './predictions.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.page.html',
  styleUrls: ['./predictions.page.scss'],
})
export class PredictionsPage implements OnInit {

  games = [];
  selections = [];
  firstSelected = '';
  secondSelected = '';
  thirdSelected = '';
  fourthSelected = '';
  fifthSelected = '';
  sixthSelected = '';

  constructor(private predictionsService: PredictionsService) { }

  async getCurrentRound() {
    this.games = await this.predictionsService.getCurrentRound();
    console.log('this.games[0].awayLogo: ', this.games[0].awayLogo);
    console.log('this.games[0]: ', this.games[0]);
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

  saveSelections() {
    console.log('selections: ', this.selections);
  }

  ngOnInit() {
    this.getCurrentRound();
  }

}
