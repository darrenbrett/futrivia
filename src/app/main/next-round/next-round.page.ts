import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-round',
  templateUrl: './next-round.page.html',
  styleUrls: ['./next-round.page.scss'],
})
export class NextRoundPage implements OnInit {

  @Input() userStats;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async loadNextRound() {
    this.router.navigateByUrl('trivia');
  }

}
