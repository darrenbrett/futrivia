import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTopic'
})
export class FormatTopicPipe implements PipeTransform {
  transform(value: string) {
    if (value === 'laliga') {
      value = 'La Liga';
    } else if (value === 'premierleague') {
      value = 'Premier League';
    } else if (value === 'bundesliga') {
      value = 'Bundesliga';
    } else if (value === 'mls') {
      value = 'MLS';
    }
    return value;
  }
}
