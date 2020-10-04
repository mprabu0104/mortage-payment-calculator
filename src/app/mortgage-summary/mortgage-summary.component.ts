import { Component, OnInit } from '@angular/core';

export interface MortgageSummaryData {
  mortgageAmount: number;
  amortizationPeriod: number;
  paymentFrequency: number;
  interestRate: number;
  totalInterestCost?: number;
  term: number;
}

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.scss'],
})
export class MortgageSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //Calculating the Payment Amount per Period
  public mortgagePayment(): number {
    return;
  }
  // Calculate Total Interest Cost by amortization periods
  public totalInterestCost(): number {
    return;
  }
  // Calculate Total Cost including interest
  public totalCost(): number {
    return;
  }
}
