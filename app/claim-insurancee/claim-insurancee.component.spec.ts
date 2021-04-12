import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimInsuranceeComponent } from './claim-insurancee.component';

describe('ClaimInsuranceeComponent', () => {
  let component: ClaimInsuranceeComponent;
  let fixture: ComponentFixture<ClaimInsuranceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimInsuranceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimInsuranceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
