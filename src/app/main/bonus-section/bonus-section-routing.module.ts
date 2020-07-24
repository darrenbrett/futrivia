import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonusSectionComponent } from './bonus-section.component';

const routes: Routes = [
  {
    path: '',
    component: BonusSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusSectionRoutingModule {}
