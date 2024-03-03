import { TestBed } from '@angular/core/testing';

import { HealthyEatingService } from './healthy-eating.service';

describe('HealthyEatingService', () => {
  let service: HealthyEatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthyEatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
