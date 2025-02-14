import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

/* ✅ A2 Books Class */
class Music {
  authorName!: string; 
  bookTitle!: string; 
  genre!: string;
}

@Component({
  selector: 'app-suranim-books',
  standalone: true, 
  imports: [CommonModule, FormsModule, MatTableModule, MatTabsModule], 
  templateUrl: './suranim-books.component.html',
  styleUrls: ['./suranim-books.component.css']
})
export class SuranimBooksComponent {
  // ✅ Accepts personalData from app.component.ts
  @Input() personalData!: { FullNamesuranim: string; EmailSheridansuranim: string };

  // ✅ Updated books array with Music class
  music: Music[] = [
    { authorName: 'George R. R. Martin', bookTitle: 'A Game of Thrones', genre: 'Fantasy' },
    { authorName: 'Jane Austen', bookTitle: 'Persuasion', genre: 'Fiction' },
    { authorName: 'Wilkie Collins', bookTitle: 'The Woman in White', genre: 'Mystery' },
    { authorName: 'J.K. Rowling', bookTitle: 'Harry Potter', genre: 'Fantasy' }
  ];
}
