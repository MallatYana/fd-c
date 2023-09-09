import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorListPageComponent } from './creator-list-page/creator-list-page.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorListPageComponent,
  },
  {
    path: 'id',
    component: CreatorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorRoutingModule {}
