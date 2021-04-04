import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountApprovalComponent } from './admin-account-approval.component';

describe('AdminAccountApprovalComponent', () => {
  let component: AdminAccountApprovalComponent;
  let fixture: ComponentFixture<AdminAccountApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
