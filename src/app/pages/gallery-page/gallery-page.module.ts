import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { ArtModalComponent } from '../../shared/elements/_modals/art-modal/art-modal.component';
import { SmallSearchFieldModule } from '../../shared/elements/small-search-field/small-search-field.module';
import { BackNavigationArrowModule } from '../../shared/elements/back-navigation-arrow/back-navigation-arrow.module';
import { TopNavModule } from '../../shared/elements/top-nav/top-nav.module';

@NgModule({
  declarations: [GalleryPageComponent],
  exports: [GalleryPageComponent],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    ArtModalComponent,
    SmallSearchFieldModule,
    BackNavigationArrowModule,
    TopNavModule,
  ],
})
export class GalleryPageModule {}
