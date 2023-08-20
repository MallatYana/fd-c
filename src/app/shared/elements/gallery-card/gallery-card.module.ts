import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ GalleryCardComponent ],
  exports: [ GalleryCardComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GalleryCardModule { }
