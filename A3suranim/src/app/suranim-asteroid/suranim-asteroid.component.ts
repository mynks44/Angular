import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { SuranimService } from '../suranim-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suranim-asteroid',
  standalone: true,
  imports: [MatButtonModule, MatGridListModule, 
    CommonModule],
  templateUrl: './suranim-asteroid.component.html',
  styleUrls: ['./suranim-asteroid.component.css']
})
export class SuranimAsteroidComponent {
  constructor(private service: SuranimService) {}

  suranimServiceCall(id: string, filename: string) {
      this.service.A3ServiceSuranim(id, filename);
  }
}