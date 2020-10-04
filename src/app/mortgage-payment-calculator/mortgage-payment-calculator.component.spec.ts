import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagePaymentCalculatorComponent } from './mortgage-payment-calculator.component';

describe('MortgagePaymentCalculatorComponent', () => {
  let component: MortgagePaymentCalculatorComponent;
  let fixture: ComponentFixture<MortgagePaymentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgagePaymentCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagePaymentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
