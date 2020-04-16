import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamNameTrunc'
})
export class TeamNameTruncPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'Creighton') {
      value = 'CRE';
    } else if (value === 'Argonia') {
      value = 'ARG';
    } else if (value === 'Larson') {
      value = 'LAR';
    } else if (value === 'Hawthorne') {
      value = 'HAW';
    } else if (value === 'Janders') {
      value = 'JAN';
    } else if (value === 'Pieska') {
      value = 'PSK';
    } else if (value === 'Westingdon') {
      value = 'WES';
    } else if (value === 'Aventura') {
      value = 'AVE';
    } else if (value === 'Solstan') {
      value = 'SOL';
    } else if (value === 'Sanviago') {
      value = 'SAN';
    } else if (value === 'Rosdan') {
      value = 'ROS';
    } else if (value === 'Andessa') {
      value = 'AND';
    }
    return value;
  }

}
