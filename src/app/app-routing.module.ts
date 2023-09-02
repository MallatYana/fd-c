import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'creators',
    loadChildren: () =>
      import('./pages/creator-page/creator-page.module').then((m) => m.CreatorPageModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery-page/gallery-page.module').then((m) => m.GalleryPageModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
