import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoLibraryModule } from 'demo-library';
// import { DemoLibraryModule } from 'dist/demo-library/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DemoLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
