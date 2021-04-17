import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsuranceApprovalComponent } from './admin-insurance-approval.component';

describe('AdminInsuranceApprovalComponent', () => {
  let component: AdminInsuranceApprovalComponent;
  let fixture: ComponentFixture<AdminInsuranceApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInsuranceApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsuranceApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
