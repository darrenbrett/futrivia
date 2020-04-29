import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictionsPage } from './predictions.page';

const routes: Routes = [
  {
    path: '',
    component: PredictionsPage
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictionsPageRoutingModule {}
