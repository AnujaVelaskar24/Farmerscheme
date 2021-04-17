import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandDetailsRegisterComponent } from './land-details-register.component';

describe('LandDetailsRegisterComponent', () => {
  let component: LandDetailsRegisterComponent;
  let fixture: ComponentFixture<LandDetailsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandDetailsRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandDetailsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
