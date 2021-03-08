//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';

@Injectable(
  //{ providedIn: 'platform' }
)

export class CounterService {

  count: number = 0;

  //constructor(private _httpClient: HttpClient) {
  constructor() {
    console.log('inside constructor');
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }
}
