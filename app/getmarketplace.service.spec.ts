import { TestBed } from '@angular/core/testing';

import { GetmarketplaceService } from './getmarketplace.service';

describe('GetmarketplaceService', () => {
  let service: GetmarketplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmarketplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
