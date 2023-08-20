import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPageComponent } from './artist-page/artist-page.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistPageRoutingModule { }
