import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetentionComponent } from './retention/retention.component';
import { InterestComponent } from './interest/interest.component';
import { UsageComponent } from './usage/usage.component';
import { AwarenessComponent } from './awareness/awareness.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';

@NgModule({
  declarations: [
    RetentionComponent,
    InterestComponent,
    UsageComponent,
    AwarenessComponent,
    CommonLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrameworkanalysisModule { }
