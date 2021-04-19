import { TestBed } from '@angular/core/testing';

import { ApplyinsuranceinsertService } from './applyinsuranceinsert.service';

describe('ApplyinsuranceinsertService', () => {
  let service: ApplyinsuranceinsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyinsuranceinsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
