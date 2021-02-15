import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app1-lib',
  template: `
    <p>
      app1 works!
      <router-outlet></router-outlet>
    </p>
  `,
  styles: [
  ]
})
export class App1Component implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    //this._router.initialNavigation();

    if (window.location.href.includes("/app1/dashboard")) {
      console.log('navigation to planning main...');
      this._router.navigate(['app1/dashboard'])
    }

  }
}
