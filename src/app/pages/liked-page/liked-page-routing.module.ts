import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikedPageComponent } from './liked-page/liked-page.component';

const routes: Routes = [
  {
    path: '',
    component: LikedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedPageRoutingModule {}
