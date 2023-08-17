import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './frameworkanalysis/common-layout/common-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'retention', pathMatch: 'full' }, 
  { path: ':type', component: CommonLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
