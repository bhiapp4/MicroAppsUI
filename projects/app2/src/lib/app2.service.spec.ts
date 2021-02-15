import { TestBed } from '@angular/core/testing';

import { App2Service } from './app2.service';

describe('App2Service', () => {
  let service: App2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
