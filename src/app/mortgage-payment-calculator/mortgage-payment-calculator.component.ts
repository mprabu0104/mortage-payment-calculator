import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mortgage-payment-calculator',
  templateUrl: './mortgage-payment-calculator.component.html',
  styleUrls: ['./mortgage-payment-calculator.component.scss'],
})
export class MortgagePaymentCalculatorComponent implements OnInit {
  public formGroup: FormGroup;
  public titleAlert = 'This field is required';
  public paymentFrequencyOptions = [];
  public terms = [];
  public prePaymentFrequencyOptions = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createMortgageForm();
  }

  // Creating a mortgage form
  public createMortgageForm(): void {
    this.formGroup = this.formBuilder.group({});
  }
  // Calculate result and open the mortgage summary form
  public onCalculate(): void {}
}
