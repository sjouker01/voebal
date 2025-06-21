import { TestBed } from '@angular/core/testing';

import { GameApi } from './game-api';

describe('GameApi', () => {
  let service: GameApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
