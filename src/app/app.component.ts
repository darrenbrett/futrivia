import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  activePath = '';
  currentPage = '';
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Log out',
      url: '/auth',
      icon: 'football'
    },
    {
      title: 'Standings',
      url: '/standings',
      icon: 'list'
    },
    {
      title: 'Scores',
      url: '/scores',
      icon: 'at'
    },
    {
      title: 'Teams',
      url: '/teams',
      icon: 'shirt'
    },
    {
      title: 'Goal scorers',
      url: '/scorers',
      icon: 'walk'
    },
    {
      title: 'Predictions',
      url: '/predictions',
      icon: 'medal'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  ngAfterViewChecked(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }

  transformedPath() {
    let pathString = '';
    let truncatedPath = '';
    if (this.activePath) {
      pathString = this.activePath.toString();
      truncatedPath = pathString.substr(1);
    }
    return truncatedPath;
  }

}
