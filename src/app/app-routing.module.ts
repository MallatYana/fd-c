import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'artist',
    loadChildren: () =>
      import('./pages/artist-page/artist-page.module').then((m) => m.ArtistPageModule),
  },
  {
    path: 'art-gallery',
    loadChildren: () =>
      import('./pages/gallery-page/gallery-page.module').then((m) => m.GalleryPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
