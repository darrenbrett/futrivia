import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriviaPage } from './trivia.page';

const routes: Routes = [
  {
    path: '',
    component: TriviaPage
  },
  {
    path: 'bonus-question',
    loadChildren: () => import('./bonus-question/bonus-question.module').then( m => m.BonusQuestionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriviaPageRoutingModule {}
