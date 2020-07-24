import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonus-section',
  templateUrl: './bonus-section.component.html',
  styleUrls: ['./bonus-section.component.css'],
})
export class BonusSectionComponent implements OnInit {

  @Input() user: any;
  bonusDeclined = false;
  @Output() bonusValueChange = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('bonus section firing...');
  }

  declineBonusQuestion() {
    this.bonusDeclined = true;
    this.bonusValueChange.emit(this.bonusDeclined);
  }

  async launchBonusQuestion() {
    this.router.navigateByUrl('/bonus-question', {
      state: { user: this.user }
    });
    this.bonusDeclined = true;
  }

}
