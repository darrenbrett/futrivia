import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  constructor(private modalCtlr: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtlr.dismiss();
  }

}
