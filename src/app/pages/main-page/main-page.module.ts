import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';

import { SmallSearchFieldModule } from '../../shared/elements/small-search-field/small-search-field.module';
import { GalleryCardModule } from '../../shared/elements/gallery-card/gallery-card.module';
import { ArtistsListCardModule } from '../../shared/elements/artists-list-card/artists-list-card.module';
import { AboutUsModalComponent } from '../../shared/modals/about-us-modal/about-us-modal.component';
import { RulesModalComponent } from '../../shared/modals/rules-modal/rules-modal.component';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    SmallSearchFieldModule,
    GalleryCardModule,
    ArtistsListCardModule,
    AboutUsModalComponent,
    RulesModalComponent,
  ],
})
export class MainPageModule {}
