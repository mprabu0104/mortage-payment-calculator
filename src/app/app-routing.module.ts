import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgagePaymentCalculatorComponent } from './mortgage-payment-calculator/mortgage-payment-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: MortgagePaymentCalculatorComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
