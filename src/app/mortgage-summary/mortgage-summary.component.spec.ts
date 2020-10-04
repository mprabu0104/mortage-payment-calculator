import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgageSummaryComponent } from './mortgage-summary.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MortgageSummaryComponent', () => {
  let component: MortgageSummaryComponent;
  let fixture: ComponentFixture<MortgageSummaryComponent>;

  const dialogMock = {
    close: () => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageSummaryComponent],
      imports: [MatDialogModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogTitle, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    });
    fixture = TestBed.createComponent(MortgageSummaryComponent);
    component = fixture.componentInstance;
  }));
});
