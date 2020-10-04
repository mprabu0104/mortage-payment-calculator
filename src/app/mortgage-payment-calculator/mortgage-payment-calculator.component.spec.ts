import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagePaymentCalculatorComponent } from './mortgage-payment-calculator.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material-module';

describe('MortgagePaymentCalculatorComponent', () => {
  let component: MortgagePaymentCalculatorComponent;
  let fixture: ComponentFixture<MortgagePaymentCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MortgagePaymentCalculatorComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagePaymentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a FormGroup', () => {
    component.ngOnInit();
    expect(component.formGroup instanceof FormGroup).toBe(true);
  });

  it('should create a form with the summary data', () => {
    expect(component.formGroup.contains('mortgageAmount')).toBeTruthy();
    expect(component.formGroup.contains('amortizationPeriod')).toBeTruthy();
    expect(component.formGroup.contains('paymentFrequency')).toBeTruthy();
    expect(component.formGroup.contains('interestRate')).toBeTruthy();
  });

  it('should consider mortgageAmount and interest rate to required', () => {
    let mortgageAmountRequired = component.formGroup.get('mortgageAmount');
    let interestRateRequired = component.formGroup.get('interestRate');

    mortgageAmountRequired.setValue('');
    interestRateRequired.setValue('');

    expect(mortgageAmountRequired.valid).toBeFalsy();
    expect(interestRateRequired.valid).toBeFalsy();
  });
});
