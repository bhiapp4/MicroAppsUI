import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app2-lib',
  template: `
    <p>
      app2 works!
      <router-outlet></router-outlet>
    </p>
  `,
  styles: [
  ]
})
export class App2Component implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    //this._router.initialNavigation();

    if (window.location.href.includes("/app2/dashboard")) {
      console.log('navigation to planning main...');
      this._router.navigate(['app2/dashboard'])
    }

  }

}
