import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralRoundPage } from './general-round.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralRoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoundPageRoutingModule {}
