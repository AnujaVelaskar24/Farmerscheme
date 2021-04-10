import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCropApprovalComponent } from './admin-crop-approval.component';

describe('AdminCropApprovalComponent', () => {
  let component: AdminCropApprovalComponent;
  let fixture: ComponentFixture<AdminCropApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCropApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCropApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
