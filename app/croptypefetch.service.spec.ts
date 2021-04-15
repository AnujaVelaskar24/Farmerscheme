import { TestBed } from '@angular/core/testing';

import { CroptypefetchService } from './croptypefetch.service';

describe('CroptypefetchService', () => {
  let service: CroptypefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CroptypefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
