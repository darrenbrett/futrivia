import { Injectable } from '@angular/core';
import { Standings } from './standings.model';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  eastStandings: Standings[];
  westStandings: Standings[];

  easternStandings: Standings [] = [
    {
      team: 'Creighton',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/03/creighton-fieldhawks.png',
      wins: 4,
      losses: 2,
      ties: 0,
      goalDiff: 7,
      points: 12
    }, {
      team: 'Argonia',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/argonia-specters-21.png',
      wins: 4,
      losses: 2,
      ties: 0,
      goalDiff: 6,
      points: 12
    }, {
      team: 'Larson',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/larson-summiteers.png',
      wins: 3,
      losses: 1,
      ties: 2,
      goalDiff: 3,
      points: 10
    }, {
      team: 'Hawthorne',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/hawthorne-harriers-21-sm.png',
      wins: 2,
      losses: 1,
      ties: 2,
      goalDiff: 7,
      points: 8
    }, {
      team: 'Janders',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/janders-brigade.png',
      wins: 3,
      losses: 2,
      ties: 1,
      goalDiff: -2,
      points: 4
    }, {
      team: 'Pieska',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/pieska-pikes-21.png',
      wins: 1,
      losses: 4,
      ties: 0,
      goalDiff: -8,
      points: 3
    }];

    westernStandings: Standings [] = [{
      team: 'Westingdon',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/westingdon-kodiaks.png',
      wins: 4,
      losses: 1,
      ties: 1,
      goalDiff: 2,
      points: 13
    }, {
      team: 'Rosdan',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/rosdan-redtails.png',
      wins: 3,
      losses: 3,
      ties: 0,
      goalDiff: -3,
      points: 9
    }, {
      team: 'Aventura',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/aventura-diablos-21.png',
      wins: 2,
      losses: 2,
      ties: 2,
      goalDiff: -2,
      points: 8
    }, {
      team: 'Solstan',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/solston-solars.png',
      wins: 2,
      losses: 3,
      ties: 1,
      goalDiff: -5,
      points: 7
    }, {
      team: 'Andessa',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/andessa-vanguard.png',
      wins: 1,
      losses: 3,
      ties: 2,
      goalDiff: -2,
      points: 5
    }, {
      team: 'Sanviago',
      imgUrl: 'https://evpsl.com/wp-content/uploads/2020/04/sanviago-power.png',
      wins: 1,
      losses: 3,
      ties: 2,
      goalDiff: -4,
      points: 5
    }];

  constructor() { }

  // getEastStandings() {
  //   const req = `eastern-standings`;
  //   this.easternStandings = this.apiService.sendRequest(req);
  //   return this.eastStandings;
  // }

  // getWestStandings() {
  //   const req = `western-standings`;
  //   this.westernStandings = this.apiService.sendRequest(req);
  //   return this.westernStandings;
  // }

  getEasternStandings() {
    return [...this.easternStandings];
  }

  getWesternStandings() {
    return [...this.westernStandings];
  }
}
