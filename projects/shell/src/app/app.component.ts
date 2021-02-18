import { Component, getModuleFactory, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(readonly injector: Injector) {
  }

  ngOnInit() {
    for (const script of ['shared.js', 'app1.js', 'app2.js']) {
      this.addScript(script);
    }

    setTimeout(() => {
      const app1Module = getModuleFactory('app1').create(this.injector);
      app1Module.instance.ngDoBootstrap();

      const app2Module = getModuleFactory('app2').create(this.injector);
      app2Module.instance.ngDoBootstrap();
    }, 2000);
  }

  addScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  }
}
