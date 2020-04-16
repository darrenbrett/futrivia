import { Component, OnInit } from '@angular/core';
import { StandingsService } from './standings.service';
import { APIConfig } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Standings } from './standings.model';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
})
export class StandingsPage implements OnInit {
  easternStandings: Standings[];
  westernStandings: Standings[];

  constructor(private http: HttpClient, private standingsService: StandingsService) { }

  getEasternStandings(): any {
    const req = `standings/eastern`;
    this.http.get<[]>(`${APIConfig.url}/${req}`).subscribe(data => {
        this.easternStandings = data;
    });
  }

  getWesternStandings(): any {
    const req = `standings/western`;
    this.http.get<[]>(`${APIConfig.url}/${req}`).subscribe(data => {
        this.westernStandings = data;
    });
  }


  ngOnInit() {
    // this.getEasternStandings();
    // this.getWesternStandings();
    this.easternStandings = this.standingsService.getEasternStandings();
    this.westernStandings = this.standingsService.getWesternStandings();
  }

}
