import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonmarketplaceComponent } from './commonmarketplace.component';

describe('CommonmarketplaceComponent', () => {
  let component: CommonmarketplaceComponent;
  let fixture: ComponentFixture<CommonmarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonmarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonmarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
