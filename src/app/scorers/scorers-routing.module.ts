import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScorersPage } from './scorers.page';

const routes: Routes = [
  {
    path: '',
    component: ScorersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScorersPageRoutingModule {}
