import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextRoundPage } from './next-round.page';

const routes: Routes = [
  {
    path: '',
    component: NextRoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextRoundPageRoutingModule {}
