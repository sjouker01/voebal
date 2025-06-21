import { TestBed } from '@angular/core/testing';

import { CountryApi } from './country-api';

describe('CountryApi', () => {
  let service: CountryApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
