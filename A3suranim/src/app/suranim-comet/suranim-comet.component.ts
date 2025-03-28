import { Component } from '@angular/core';
import { SuranimService } from '../suranim-service.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-suranim-comet',
  imports: [ MatGridListModule, MatButtonModule, CommonModule],
  templateUrl: './suranim-comet.component.html',
  styleUrls: ['./suranim-comet.component.css']
})
export class SuranimCometComponent {
  constructor(private service: SuranimService) {}

  suranimServiceCall(id: string, filename: string) {
      this.service.A3ServiceSuranim(id, filename);
  }
}
