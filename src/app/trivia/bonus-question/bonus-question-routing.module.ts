import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonusQuestionPage } from './bonus-question.page';

const routes: Routes = [
  {
    path: '',
    component: BonusQuestionPage
  },
  {
    path: 'bonus-result',
    loadChildren: () => import('./bonus-result/bonus-result.module').then( m => m.BonusResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusQuestionPageRoutingModule {}
