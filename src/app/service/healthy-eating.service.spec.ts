import { TestBed } from '@angular/core/testing';

import { HealthyEatingService } from './healthy-eating.service';
import { HttpClientModule } from '@angular/common/http';

describe('HealthyEatingService', () => {
  let service: HealthyEatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HealthyEatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
