import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-general-round',
  templateUrl: './general-round.page.html',
  styleUrls: ['./general-round.page.scss', './../main.page.scss'],
})
export class GeneralRoundPage {

  @Input() user: User;

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
        classList = 'crimson-bg';
    }
    return classList;
  }

}
