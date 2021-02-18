import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, getPlatform, Injector, NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { App2RoutingModule } from './app2-routing.module';
import { App2Component } from './app2.component';
import { createCustomElement } from '@angular/elements';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    App2Component,
    DashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    App2RoutingModule
  ],
  id: 'app2',
  exports: [App2Component]
})
export class App2Module implements DoBootstrap {

  constructor(private injector: Injector) {
    console.log('inside app2  module constructor');
  }

  ngDoBootstrap() {
    console.log("App2 Module: Entered ngDoBootstrap...");
    const myElementExists = !!customElements.get("app2-two");
    if (!myElementExists) {
      const appElement = createCustomElement(App2Component, {
        injector: this.injector
      });
      customElements.define("app-two", appElement);
    }
    console.log("App2 Module: Completed ngDoBootstrap...");
  }
}
// If there is already a platform, reuse it, otherwise create a new one
// (getPlatform() || platformBrowser()).bootstrapModule(App2Module).catch(err => console.log(err));

