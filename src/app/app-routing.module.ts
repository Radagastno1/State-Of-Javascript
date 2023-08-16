import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetentionComponent } from './frameworkanalysis/retention/retention.component';
import { InterestComponent } from './frameworkanalysis/interest/interest.component';
import { UsageComponent } from './frameworkanalysis/usage/usage.component';
import { AwarenessComponent } from './frameworkanalysis/awareness/awareness.component';

const routes: Routes = [
  { path: '', redirectTo: 'retention', pathMatch: 'full' }, // Redirect to /retention on the home page
  { path: 'retention', component: RetentionComponent },  
  { path: 'interest', component: InterestComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'awareness', component: AwarenessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
