import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, getPlatform, Injector, NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { App1Component } from './app1.component';
import { createCustomElement } from '@angular/elements';
import { DashboardComponent } from './dashboard/dashboard.component';
import { App1RoutingModule } from './app1-routing.module';

@NgModule({
  declarations: [
    App1Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    App1RoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [App1Component]
})
export class App1Module implements DoBootstrap {

  constructor(private injector: Injector) {
    console.log('inside iqm lib module constructor');
  }

  ngDoBootstrap() {
    console.log("App1 Module: Entered ngDoBootstrap...");
    const myElementExists = !!customElements.get("app-one");
    if (!myElementExists) {
      const appElement = createCustomElement(App1Component, {
        injector: this.injector
      });
      customElements.define("app-one", appElement);
    }
    console.log("App1 Module: Completed ngDoBootstrap...");
  }
}
// If there is already a platform, reuse it, otherwise create a new one
(getPlatform() || platformBrowser()).bootstrapModule(App1Module).catch(err => console.log(err));
