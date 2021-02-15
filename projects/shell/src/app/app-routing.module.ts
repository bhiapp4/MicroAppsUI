import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoaderComponent } from './app-loader/app-loader.component';

const routes: Routes = [
  {
    path: 'app1',
    children: [
      { path: 'dashboard', component: AppLoaderComponent }
    ]
  },
  {
    path: 'app2',
    children: [
      { path: 'dashboard', component: AppLoaderComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
