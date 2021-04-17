import { TestBed } from '@angular/core/testing';

import { BidderhistoryService } from './bidderhistory.service';

describe('BidderhistoryService', () => {
  let service: BidderhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidderhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
