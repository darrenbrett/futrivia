import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topical-trivia',
  templateUrl: './topical-trivia.component.html',
  styleUrls: ['./topical-trivia.component.scss', './../main.page.scss'],
})
export class TopicalTriviaComponent implements OnInit {
  @Input() user: any;

  constructor(private router: Router) { }

  ngOnInit() {}

  playTopicalRound(topic) {
    const joinedTopicStr  = topic.replace(/\s/g, '');
    this.router.navigateByUrl('/trivia', {
      state: { topic: joinedTopicStr }
    });
  }
}
