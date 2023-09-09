import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GalleryCardComponent],
  exports: [GalleryCardComponent],
  imports: [CommonModule, RouterModule, NgbTooltipModule],
})
export class GalleryCardModule {}
