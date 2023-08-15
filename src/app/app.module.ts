import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrameworkanalysisModule } from './frameworkanalysis/frameworkanalysis.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrameworkanalysisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
