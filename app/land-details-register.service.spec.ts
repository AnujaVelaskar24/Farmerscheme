import { TestBed } from '@angular/core/testing';

import { LandDetailsRegisterService } from './land-details-register.service';

describe('LandDetailsRegisterService', () => {
  let service: LandDetailsRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandDetailsRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
