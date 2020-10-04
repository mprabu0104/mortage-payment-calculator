import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  constructor(
    public dialogRef: MatDialogRef<MortgageSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public formData: MortgageSummaryData
  ) {}

  ngOnInit(): void {}

  //get total number of payment frequency
  public getNumPayments(paymentFrequency): number {
    switch (Number(paymentFrequency)) {
      case 1: {
        return 52;
      }
      case 2: {
        return 52;
      }
      case 3: {
        return 26;
      }
      case 4: {
        return 26;
      }
      case 5:
        return 24;

      case 6:
        return 12;
    }
  }

  // Calculate Annual Percentage Rate -  (Fees+ Interest) x 1 year x 100 / Principal and number of periods for the loan
  public annualPercentageRate(): number {
    return (
      this.formData.interestRate /
      100 /
      this.getNumPayments(this.formData.paymentFrequency)
    );
  }

  //Calculate total number of Amortizarion Period by payment Frequency
  public numOfAmortizationPayments(): number {
    return (
      this.formData.amortizationPeriod *
      this.getNumPayments(this.formData.paymentFrequency)
    );
  }

  //Calculate total number of Term Period by payment Frequency
  public numOfTermPayments(): number {
    return (
      this.formData.term * this.getNumPayments(this.formData.paymentFrequency)
    );
  }

  //Calculate interest payments --- (1+i)^n
  public interestPayments(): number {
    return Math.pow(
      1 + this.annualPercentageRate(),
      this.numOfAmortizationPayments()
    );
  }

  //Calculating the Payment Amount per Period
  public mortgagePayment(): number {
    return (
      (this.formData.mortgageAmount *
        (this.annualPercentageRate() * this.interestPayments())) /
      (this.interestPayments() - 1)
    );
  }

  // Calculate Total Interest Cost by amortization periods
  public totalInterestCost(): number {
    return (this.formData.totalInterestCost =
      this.mortgagePayment() * this.numOfAmortizationPayments() -
      this.formData.mortgageAmount);
  }

  // Calculate Total Cost including interest
  public totalCost(): number {
    return (this.formData.totalInterestCost =
      this.totalInterestCost() + this.formData.mortgageAmount);
  }

  // Calculate the Total term Cost
  public totalTermCost(): number {
    return this.numOfTermPayments() * this.mortgagePayment();
  }

  // Close Modal
  public onClose(): void {
    this.dialogRef.close(false);
  }
}
