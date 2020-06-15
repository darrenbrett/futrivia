import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamNameTruncPipe } from './team-name-trunc.pipe';

@NgModule({
  declarations: [TeamNameTruncPipe],
  exports: [
    TeamNameTruncPipe
  ],
  imports: [
    CommonModule
  ]
})
  export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
}
