import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-next-round',
  templateUrl: './next-round.page.html',
  styleUrls: ['./next-round.page.scss'],
})
export class NextRoundPage implements OnInit {

  @Input() user: User;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('next-round section firing...');
  }

  async loadNextRound() {
    this.router.navigateByUrl('trivia');
  }

}
