import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerTransactionHistoryComponent } from './farmer-transaction-history.component';

describe('FarmerTransactionHistoryComponent', () => {
  let component: FarmerTransactionHistoryComponent;
  let fixture: ComponentFixture<FarmerTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerTransactionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
