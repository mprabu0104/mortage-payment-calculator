import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MortgagePaymentCalculatorComponent } from './mortgage-payment-calculator/mortgage-payment-calculator.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MortgageSummaryComponent } from './mortgage-summary/mortgage-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MortgagePaymentCalculatorComponent,
    MortgageSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [MortgageSummaryComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
