import { Component } from '@angular/core';
import { SuranimService } from '../suranim-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule],

  selector: 'app-suranim-meteorite',
  templateUrl: './suranim-meteorite.component.html',
  styleUrls: ['./suranim-meteorite.component.css']
})
export class SuranimMeteoriteComponent {
  constructor(private service: SuranimService) {}

  suranimServiceCall(id: string, filename: string) {
      this.service.A3ServiceSuranim(id, filename);
  }
}
