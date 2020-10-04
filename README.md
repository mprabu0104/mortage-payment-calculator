# MortagePaymentCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4 // Angular material.

# Formula Below to calculate the payment

formula below to calculate the payment

`Payment = P x (r / n) x (1 + r / n)^n(t)] / (1 + r / n)^n(t) - 1`

# Example Mortgage Payment Calculation

Borrow loan for \$100,000 at 6% for 30 years, to be repaid monthly.

Plug those numbers into the payment formula:

{100,000 x (.06 / 12) x [1 + (.06 / 12)^12(30)]} / {[1 + (.06 / 12)^12(30)] - 1}
(100,000 x .005 x 6.022575) / 5.022575
3011.288 / 5.022575 = 599.55

`The monthly payment is $599.55.`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
