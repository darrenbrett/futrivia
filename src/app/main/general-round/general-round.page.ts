import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-round',
  templateUrl: './general-round.page.html',
  styleUrls: ['./general-round.page.scss', './../main.page.scss'],
})
export class GeneralRoundPage {

  @Input() user;
  flip: any;

  constructor(private router: Router) { }

  async loadNextRound() {
    this.router.navigateByUrl('/trivia', {
      state: { topic: 'general' }
    });
  }

  getClass() {
    let classList = '';
    if (this.user.level === '2') {
       classList = 'sky-bg';
    } else if (this.user.level === '3') {
        classList = 'purple-bg';
    } else if (this.user.level === '4') {
        classList = 'crimson';
    }
    return classList;
  }

}
