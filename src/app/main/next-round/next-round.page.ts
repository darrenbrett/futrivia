import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-round',
  templateUrl: './next-round.page.html',
  styleUrls: ['./next-round.page.scss'],
})
export class NextRoundPage {

  @Input() user;

  constructor(private router: Router) { }

  async loadNextRound() {
    this.router.navigateByUrl('trivia');
  }

}
