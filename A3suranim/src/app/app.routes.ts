import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuranimAsteroidComponent } from './suranim-asteroid/suranim-asteroid.component';
import { SuranimCometComponent } from './suranim-comet/suranim-comet.component';
import { SuranimMeteoriteComponent } from './suranim-meteorite/suranim-meteorite.component';

export const routes: Routes = [
  { path: 'asteroid', component: SuranimAsteroidComponent },
  { path: 'meteorite', component: SuranimMeteoriteComponent },
  { path: 'comet', component: SuranimCometComponent },
  { path: '', redirectTo: '/asteroid', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }