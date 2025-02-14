import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material-ui.module';
import { CommonModule } from '@angular/common';
import { SuranimA2 } from './A2ClassSuranim';
import { HeaderSuranimComponent } from './header-suranim/header-suranim.component';
import { SuranimBooksComponent } from './suranim-books/suranim-books.component';
import { SuranimDirectivesComponent } from './suranim-directives/suranim-directives.component';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[RouterOutlet, MaterialModule,CommonModule, HeaderSuranimComponent, 
    SuranimBooksComponent, SuranimDirectivesComponent, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2suranim';
  suranimPersonal: SuranimA2;

  constructor() {
    this.suranimPersonal = new SuranimA2();
    this.suranimPersonal.FullNamesuranim = "Mayank Mehulkumar Surani";
    this.suranimPersonal.IDSheridansuranim = "991770027";
    this.suranimPersonal.LoginSheridansuranim = "suranim";
    this.suranimPersonal.EmailSheridansuranim = "suranim@sheridancollege.ca";
    this.suranimPersonal.CampusSheridansuranim = "Davis"; 
  }
}
