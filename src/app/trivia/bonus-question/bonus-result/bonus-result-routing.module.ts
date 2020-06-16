import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonusResultPage } from './bonus-result.page';

const routes: Routes = [
  {
    path: '',
    component: BonusResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusResultPageRoutingModule {}
