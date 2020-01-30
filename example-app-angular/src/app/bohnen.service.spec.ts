import { TestBed } from '@angular/core/testing';

import { BohnenService } from './bohnen.service';

describe('BohnenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BohnenService = TestBed.get(BohnenService);
    expect(service).toBeTruthy();
  });
});
