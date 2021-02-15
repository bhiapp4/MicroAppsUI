import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { HttpClientModule } from '@angular/common/http';
import { CounterService } from 'shared';

@NgModule({
  declarations: [
    AppComponent,
    AppLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    //CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
