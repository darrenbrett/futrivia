import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandingsPageRoutingModule } from './standings-routing.module';

import { StandingsPage } from './standings.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandingsPageRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [StandingsPage]
})
export class StandingsPageModule {}
