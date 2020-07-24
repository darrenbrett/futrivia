import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicalTriviaComponent } from './topical-trivia.component';

const routes: Routes = [
  {
    path: '',
    component: TopicalTriviaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicalTriviaRoutingModule {}
