import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonusQuestionPageRoutingModule } from './bonus-question-routing.module';

import { BonusQuestionPage } from './bonus-question.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BonusQuestionPageRoutingModule
  ],
  declarations: [BonusQuestionPage]
})
export class BonusQuestionPageModule {}
