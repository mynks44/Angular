import { Component, OnInit } from '@angular/core';
import {MaterialModule} from './modules/material-ui.module';
import { SuranimPopupComponent } from './suranim-popup/suranim-popup.component';
import {CommonModule} from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
class FormData991234567 {
  IDsuranim = '991234567';
  NAMEsuranim = 'Mayank Mehulkumar Surani';
  LOGINsuranim = 'suranim';
  EMAILsuranim = 'suranim@sheridancollege.ca';
  CAMPUSsuranim = 'Davis';
  STATUSsuranim = 'International';
}

class Output991234567 extends FormData991234567 {
  APPEALsuranim = '';
  DATEsuranim = new Date();
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MaterialModule, 
    CommonModule, SuranimPopupComponent, 
    MatSelectModule, MatFormFieldModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  suranimStartup = new FormData991234567();
  suranimForm!: FormGroup;
  suranimStatus = ['Domestic', 'International'];
  suranimAppeal = [
    'Appeal Request-Grade',
    'Appeal Request-Readmission',
    'Appeal Request-Max Attempt Override',
  ];
  suranimCampus = ['Davis', 'Trafalgar', 'HMC'];
  currentDate = new Date();
  outputsuranim = new Output991234567();

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.suranimForm = this.fb.group({
      IDsuranim: [this.suranimStartup.IDsuranim],
      NAMEsuranim: [this.suranimStartup.NAMEsuranim],
      LOGINsuranim: [this.suranimStartup.LOGINsuranim],
      CONTACTsuranim: [this.suranimStartup.EMAILsuranim],
      STATUSsuranim: [this.suranimStartup.STATUSsuranim],
      APPEALsuranim: [this.suranimAppeal[0]],
      CAMPUSsuranim: [this.suranimStartup.CAMPUSsuranim],
      DATEsuranim: [this.currentDate],
    });
  }

  suranimSubmit() {
    this.outputsuranim = {
      ...this.suranimForm.value,
    };
    this.dialog.open(SuranimPopupComponent, {
      width: '600px',
      data: this.outputsuranim,
    });
  }
}