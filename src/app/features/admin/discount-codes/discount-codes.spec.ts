import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCodes } from './discount-codes';

describe('DiscountCodes', () => {
  let component: DiscountCodes;
  let fixture: ComponentFixture<DiscountCodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountCodes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCodes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
