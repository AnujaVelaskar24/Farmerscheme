import { TestBed } from '@angular/core/testing';

import { GetlandService } from './getland.service';

describe('GetlandService', () => {
  let service: GetlandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
