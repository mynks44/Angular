import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SuranimAsteroidComponent } from './suranim-asteroid/suranim-asteroid.component';
import { SuranimCometComponent } from './suranim-comet/suranim-comet.component';

import { SuranimMeteoriteComponent } from './suranim-meteorite/suranim-meteorite.component';
import { CommonModule } from '@angular/common';
import { A3ClassSuranim } from './A3ClassSuranim';
import { SuranimHeaderComponent } from './suranim-header/suranim-header.component';
import { SuranimFooterComponent } from './suranim-footer/suranim-footer.component';
import { MaterialModule } from './modules/material-ui.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SuranimHeaderComponent, SuranimFooterComponent, 
    MaterialModule, MatButtonModule, MatGridListModule, 
    RouterModule, SuranimAsteroidComponent, SuranimCometComponent,
     SuranimMeteoriteComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A3Suranim';
  studentSuranim: A3ClassSuranim = new A3ClassSuranim();
}
