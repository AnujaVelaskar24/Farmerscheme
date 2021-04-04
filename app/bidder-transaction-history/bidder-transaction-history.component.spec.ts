import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderTransactionHistoryComponent } from './bidder-transaction-history.component';

describe('BidderTransactionHistoryComponent', () => {
  let component: BidderTransactionHistoryComponent;
  let fixture: ComponentFixture<BidderTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderTransactionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
