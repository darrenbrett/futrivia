import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  @Input() score;
  @Input() gamesAvailable = 2;

  genResultMessage() {
    let message: string;
    if (this.score === 10) {
      message = 'Wow. Perfection!';
    } else if (this.score >= 8 && this.score < 10) {
      message = 'Well done!';
    } else if (this.score < 8 && this.score >= 6) {
      message = 'Pretty good!';
    } else if (this.score < 6) {
      message = 'Needs some work!';
    }
    return message;
  }

  constructor(private modalCtlr: ModalController, private navService: NavigationService) { }

  ngOnInit() {

  }

  async closeModal() {
    await this.modalCtlr.dismiss();
    this.navService.navigateHome();
  }

}
