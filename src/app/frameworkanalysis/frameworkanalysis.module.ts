import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetentionComponent } from './retention/retention.component';
import { InterestComponent } from './interest/interest.component';
import { UsageComponent } from './usage/usage.component';
import { AwarenessComponent } from './awareness/awareness.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    RetentionComponent,
    InterestComponent,
    UsageComponent,
    AwarenessComponent,
    CommonLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FrameworkanalysisModule { }
