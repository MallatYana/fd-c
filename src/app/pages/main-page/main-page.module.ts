import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';

import { SmallSearchFieldModule } from '../../shared/elements/small-search-field/small-search-field.module';
import { GalleryCardModule } from '../../shared/elements/_cards/gallery-card/gallery-card.module';
import { AboutUsModalComponent } from '../../shared/elements/_modals/about-us-modal/about-us-modal.component';
import { RulesModalComponent } from '../../shared/elements/_modals/rules-modal/rules-modal.component';

import { CreatorsListCard } from '../../shared/elements/_cards/creators-list-card/creators-list-card';
import { TopNavModule } from '../../shared/elements/top-nav/top-nav.module';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    SmallSearchFieldModule,
    GalleryCardModule,
    CreatorsListCard,
    AboutUsModalComponent,
    RulesModalComponent,
    TopNavModule,
  ],
})
export class MainPageModule {}
