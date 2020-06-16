import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonusResultPageRoutingModule } from './bonus-result-routing.module';

import { BonusResultPage } from './bonus-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonusResultPageRoutingModule
  ],
  declarations: [BonusResultPage]
})
export class BonusResultPageModule {}
