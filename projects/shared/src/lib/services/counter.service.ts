import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CounterService {

  count: number = 0;

  constructor(readonly httpClient: HttpClient) {
    console.log('inside constructor');
    console.log(httpClient);
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }
}
