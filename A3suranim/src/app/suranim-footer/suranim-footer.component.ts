import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suranim-footer',
  imports: [ CommonModule],
  template: `<h3>Email: {{ email }} / Login: {{ login }}</h3>`,
  styles: [`h3 { text-align: center; background-color: #444; color: white; padding: 10px; }`]
})
export class SuranimFooterComponent {
  @Input() email!: string;
  @Input() login!: string;
}
