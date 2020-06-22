import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamNameTruncPipe } from './team-name-trunc.pipe';
import { FormatTimePipe } from './format-time.pipe';
import { FormatTopicPipe } from './format-topic.pipe';

@NgModule({
  declarations: [TeamNameTruncPipe, FormatTimePipe, FormatTopicPipe],
  exports: [
    TeamNameTruncPipe,
    FormatTimePipe,
    FormatTopicPipe
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
