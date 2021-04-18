import { TestBed } from '@angular/core/testing';

import { GetinsuranceserviceService } from './getinsuranceservice.service';

describe('GetinsuranceserviceService', () => {
  let service: GetinsuranceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetinsuranceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
