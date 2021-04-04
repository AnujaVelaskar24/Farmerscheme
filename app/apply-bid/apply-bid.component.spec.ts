import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyBidComponent } from './apply-bid.component';

describe('ApplyBidComponent', () => {
  let component: ApplyBidComponent;
  let fixture: ComponentFixture<ApplyBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyBidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
