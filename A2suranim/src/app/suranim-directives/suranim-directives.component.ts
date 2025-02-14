import { Component, Input } from '@angular/core';
import { SuranimA2 } from '../A2ClassSuranim';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suranim-directives',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './suranim-directives.component.html',
  styleUrls: ['./suranim-directives.component.css']
})
export class SuranimDirectivesComponent {
  @Input() personalData!: SuranimA2;
  suranimCampus: string = "Davis"; 
}


