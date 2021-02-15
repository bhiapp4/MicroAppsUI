import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  config = [
    {
      name: "app1",
      urls: ["/app1"],
      loaded: false,
      path: 'app1/bundles/app1.umd.js',
      element: 'app-one'
    },
    {
      name: "app2",
      urls: ["/app2"],
      loaded: false,
      path: 'app2/bundles/app2.umd.js',
      element: 'app-two'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.clearAllExisting();
    this.loadByUrl();
  }

  clearAllExisting() {
    this.config.forEach(configItem => {
      this.clearExistingComponent(configItem.element)
    });
  }

  isInCurrentUrl(urls: string[]): boolean {
    let returnValue = false;
    urls.forEach(url => {
      console.log('checking url = ' + window.location.href + ' for ' + url + '.');
      if (window.location.href.includes(url)) {
        console.log('return true!');
        returnValue = true;
      }
    });
    return returnValue;
  }

  loadByUrl() {
    console.log('inside by url');
    this.config.forEach(configItem => {
      if (this.isInCurrentUrl(configItem.urls)) {
        this.loadConfigItem(configItem);
      }
    });
    console.log('completed load by url');
  }

  loadConfigItem(configItem) {

    if (configItem.loaded) return;

    const content = document.getElementById('content');

    this.clearExistingComponent(configItem.element);

    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

    element.addEventListener('message', msg => this.handleMessage(msg));

    script.onerror = () => console.error(`error loading ${configItem.path}`);

    configItem.loaded = true;

  }

  load(name: string): void {
    console.log('inside load method for ' + name);

    this.config.forEach(configItem => {
      if (configItem.name == name) {
        this.loadConfigItem(configItem);
      }
    });

    console.log('completed loading method for ' + name);
  }

  clearExistingComponent(tagname) {
    console.log('entered clearExistingComponent...');

    var existingElement = document.getElementsByTagName(tagname);
    for (var i = 0; i < existingElement.length; i++) {
      console.log('removing instance of a ' + tagname + ' element...');
      existingElement[i].parentNode.removeChild(existingElement[i]);
    }
    console.log('finished clearExistingComponent.');
  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }

}
