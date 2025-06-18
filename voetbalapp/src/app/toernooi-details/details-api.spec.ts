import { TestBed } from '@angular/core/testing';

import { DetailsApi } from './details-api';

describe('DetailsApi', () => {
  let service: DetailsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
