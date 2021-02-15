import { Component, OnInit } from '@angular/core';
import { CounterService } from 'shared';

@Component({
  selector: 'app1-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  count = 0;

  ngOnInit(): void {
  }

  constructor(public _counterService: CounterService) {
    this.count = this._counterService.count;
  }


  increment() {
    this._counterService.increment();
    this.count = this._counterService.count;
  }

  decrement() {
    this._counterService.decrement();
    this.count = this._counterService.count;
  }


}
