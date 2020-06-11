import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private counter = 0;

  constructor(private navCtlr: NavController) { }

  navigateHome() {
    const incCount = this.counter += 1;
    this.navCtlr.navigateRoot(`/main/${incCount}`);
  }
}
