import { TestBed } from '@angular/core/testing';

import { AdminBidApprovalService } from './admin-bid-approval.service';

describe('AdminBidApprovalService', () => {
  let service: AdminBidApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBidApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
