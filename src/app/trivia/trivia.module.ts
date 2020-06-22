import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriviaPageRoutingModule } from './trivia-routing.module';

import { TriviaPage } from './trivia.page';

import { ConfirmationPageModule } from './confirmation/confirmation.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TriviaPageRoutingModule,
    ConfirmationPageModule
  ],
  declarations: [TriviaPage]
})
export class TriviaPageModule {}
