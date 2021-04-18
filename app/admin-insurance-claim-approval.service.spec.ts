import { TestBed } from '@angular/core/testing';

import { AdminInsuranceClaimApprovalService } from './admin-insurance-claim-approval.service';

describe('AdminInsuranceClaimApprovalService', () => {
  let service: AdminInsuranceClaimApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInsuranceClaimApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
