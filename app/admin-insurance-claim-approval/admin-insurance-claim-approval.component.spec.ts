import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsuranceClaimApprovalComponent } from './admin-insurance-claim-approval.component';

describe('AdminInsuranceClaimApprovalComponent', () => {
  let component: AdminInsuranceClaimApprovalComponent;
  let fixture: ComponentFixture<AdminInsuranceClaimApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInsuranceClaimApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsuranceClaimApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
