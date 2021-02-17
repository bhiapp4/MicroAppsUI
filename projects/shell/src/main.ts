import * as core from '@angular/core';
import * as common from '@angular/common';
import * as platformBrowser from '@angular/platform-browser';
import * as animations from '@angular/animations';
import * as router from '@angular/router';
import * as elements from '@angular/elements';
import * as http from '@angular/common/http';
import * as rxjs from 'rxjs';
import * as operators from 'rxjs/operators';

(window as any).rxjs = {...rxjs, operators};
(window as any).ng = {core, common: {...common, http}, platformBrowser, animations, router, elements};

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  core.enableProdMode();
}

platformBrowser.platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));
