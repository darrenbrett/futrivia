import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTimePipe } from './format-time.pipe';
import { FormatTopicPipe } from './format-topic.pipe';

@NgModule({
  declarations: [FormatTimePipe, FormatTopicPipe],
  exports: [
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
