import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MaterialModule} from '../modules/material-ui.module';

import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-suranim-popup',
  imports: [ CommonModule, MaterialModule],
  templateUrl: './suranim-popup.component.html',
  styleUrl: './suranim-popup.component.css'
})
export class SuranimPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<SuranimPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }
}
