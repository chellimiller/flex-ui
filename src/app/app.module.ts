import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexUiModule } from 'flex-ui/flex-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
