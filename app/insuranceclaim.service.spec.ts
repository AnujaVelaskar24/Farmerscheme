import { TestBed } from '@angular/core/testing';

import { InsuranceclaimService } from './insuranceclaim.service';

describe('InsuranceclaimService', () => {
  let service: InsuranceclaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceclaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
