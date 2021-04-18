import { TestBed } from '@angular/core/testing';

import { AdminInsuranceApprovalService } from './admin-insurance-approval.service';

describe('AdminInsuranceApprovalService', () => {
  let service: AdminInsuranceApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInsuranceApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
