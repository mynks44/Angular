import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-suranim-header',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>Winter 2025 / A3 for {{ fullName | uppercase }} / {{ id }} / Space Rocks</h3>`,
  styles: [`h3 { background-color: black; color: white; text-align: center; padding: 10px; }`]
})
export class SuranimHeaderComponent {
  @Input() fullName!: string;
  @Input() id!: string;
}
