import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from '@uiowa/spinner';
import { AppComponent } from './app.component';
import { SpinnerDefaultComponent } from './spinner-default/spinner-default.component';
import { SpinnerWithMinDurationComponent } from './spinner-with-min-duration/spinner-with-min-duration.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerDefaultComponent,
    SpinnerWithMinDurationComponent
  ],
  imports: [BrowserModule, CommonModule, SpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
