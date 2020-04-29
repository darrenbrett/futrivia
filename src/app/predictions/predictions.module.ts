import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredictionsPageRoutingModule } from './predictions-routing.module';

import { PredictionsPage } from './predictions.page';
import { ConfirmationPageModule } from './confirmation/confirmation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredictionsPageRoutingModule,
    ConfirmationPageModule
  ],
  declarations: [PredictionsPage]
})
export class PredictionsPageModule {}
