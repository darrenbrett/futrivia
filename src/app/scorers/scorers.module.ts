import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorersPageRoutingModule } from './scorers-routing.module';

import { ScorersPage } from './scorers.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorersPageRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [ScorersPage]
})
export class ScorersPageModule {}
