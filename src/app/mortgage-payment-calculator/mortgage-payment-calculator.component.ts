import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MortgageSummaryComponent } from '../mortgage-summary/mortgage-summary.component';

@Component({
  selector: 'app-mortgage-payment-calculator',
  templateUrl: './mortgage-payment-calculator.component.html',
  styleUrls: ['./mortgage-payment-calculator.component.scss'],
})
export class MortgagePaymentCalculatorComponent implements OnInit {
  public formGroup: FormGroup;
  public titleAlert = 'This field is required';

  public paymentFrequencyOptions = [
    { type: 'Accelerated Weekly', value: 1 },
    { type: 'Weekly', value: 2 },
    {
      type: 'Accelerated Bi-weekly',
      value: 3,
    },
    { type: 'Bi-weekly (every 2 weeks)', value: 4 },
    {
      type: 'Semi-monthly (24x per year)',
      value: 5,
    },
    { type: 'Monthly (12x per year)', value: 6 },
  ];

  public terms = [
    { type: 'Monthly', value: 12 },
    { type: 'Semi-monthly', value: 24 },
    { type: 'Bi-Weekly', value: 26 },
    { type: 'Weekly', value: 52 },
  ];

  public prePaymentFrequencyOptions = [
    { type: 'One time', value: 1 },
    { type: 'Each year', value: 2 },
    { type: 'Same as regular payment', value: 3 },
  ];

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.createForm();
  }

  arrayYears(num: number) {
    return Array(num);
  }

  // Creating a mortgage form
  public createForm(): void {
    this.formGroup = this.formBuilder.group({
      mortgageAmount: [100000, Validators.required],
      amortizationPeriod: [25],
      paymentFrequency: [6],
      interestRate: [5, Validators.required],
      term: [5],
      prePaymentAmount: [0],
      prePaymentFrequency: [1],
      startWithPayment: [1],
    });
  }

  //open Mortgage Summary Dialog
  public openMortgageSummary(): void {
    document.body.classList.add('mortgage-summary-modal');

    const dialogRef = this.dialog.open(MortgageSummaryComponent, {
      restoreFocus: true,
      panelClass: 'mortgage-summary-modal-overlay',
      data: this.formGroup.value,
    });

    dialogRef.afterClosed().subscribe((result) => {
      document.body.classList.remove('mortgage-summary-modal');
      return true;
    });
  }

  // Calculate result and open the mortgage summary form
  public onCalculate(): void {
    console.log(this.formGroup, 'mortgageData');
    if (this.formGroup.valid) {
      this.openMortgageSummary();
    }
  }
}
