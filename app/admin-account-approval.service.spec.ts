import { TestBed } from '@angular/core/testing';

import { AdminAccountApprovalService } from './admin-account-approval.service';

describe('AdminAccountApprovalService', () => {
  let service: AdminAccountApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAccountApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
