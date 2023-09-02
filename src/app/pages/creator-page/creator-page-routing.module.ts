import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorPageComponent } from './creator-page/creator-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorPageComponent,

    children: [
      {
        path: 'painters',
        component: CreatorPageComponent,
      },
      {
        path: 'writers',
        component: CreatorPageComponent,
      },
      {
        path: ':id',
        component: CreatorPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorPageRoutingModule {}
