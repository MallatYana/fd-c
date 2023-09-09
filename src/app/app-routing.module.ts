import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page/register-page.component';
import { OnLoggedGuard } from './core/guards/on-logged/on-logged.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'creators',
    loadChildren: () => import('./pages/creator/creator.module').then((m) => m.CreatorModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery-page/gallery-page.module').then((m) => m.GalleryPageModule),
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [OnLoggedGuard],
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
