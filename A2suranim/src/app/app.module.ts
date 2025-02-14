import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SuranimDirectivesComponent } from './suranim-directives/suranim-directives.component';
import { SuranimBooksComponent } from './suranim-books/suranim-books.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SuranimDirectivesComponent,
    SuranimBooksComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatTabsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
