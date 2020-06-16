import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-bonus-result',
  templateUrl: './bonus-result.page.html',
  styleUrls: ['./bonus-result.page.scss'],
})
export class BonusResultPage {

  @Input() result: string;

  constructor(private modalCtlr: ModalController, private navService: NavigationService) { }

  async closeModal() {
    await this.modalCtlr.dismiss();
    this.navService.navigateHome();
  }

}
