import { Component, Input } from '@angular/core';
import { SuranimA2 } from '../A2ClassSuranim';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[CommonModule, FormsModule],
  selector: 'app-header-suranim',
  templateUrl: './header-suranim.component.html',
  styleUrls: ['./header-suranim.component.css']
})
export class HeaderSuranimComponent {
  @Input() personalData!: SuranimA2;
}
