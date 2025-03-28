import { TestBed } from '@angular/core/testing';

import { SuranimService } from './suranim-service.service';

describe('SuranimService', () => {
  let service: SuranimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuranimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
