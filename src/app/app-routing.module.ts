import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetentionComponent } from './frameworkanalysis/retention/retention.component';

const routes: Routes = [
  { path: '', component: RetentionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
