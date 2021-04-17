import { TestBed } from '@angular/core/testing';

import { FarmerhistoryService } from './farmerhistory.service';

describe('FarmerhistoryService', () => {
  let service: FarmerhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
