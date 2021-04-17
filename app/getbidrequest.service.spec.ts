import { TestBed } from '@angular/core/testing';

import { GetbidrequestService } from './getbidrequest.service';

describe('GetbidrequestService', () => {
  let service: GetbidrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetbidrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
