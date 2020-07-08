import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { NextRoundPage } from './next-round/next-round.page';
import { SharedModule } from './../shared/shared.module';
import { GeneralRoundPage } from './general-round/general-round.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [MainPage, NextRoundPage, GeneralRoundPage]
})
export class MainPageModule {}
