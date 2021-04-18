import { TestBed } from '@angular/core/testing';

import { BidrequestService } from './bidrequest.service';

describe('BidrequestService', () => {
  let service: BidrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
