import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { ArtModalComponent } from '../../shared/modals/art-modal/art-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ GalleryPageComponent ],
  exports: [ GalleryPageComponent ],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    ArtModalComponent,
    RouterModule
  ]
})
export class GalleryPageModule { }
