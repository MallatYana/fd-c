import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreatorListPageComponent } from './creator-list-page/creator-list-page.component';
import { CreatorPageComponent } from './creator-page/creator-page.component';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorCardModule } from '../../shared/elements/_cards/creator-card/creator-card.module';
import { SmallSearchFieldModule } from '../../shared/elements/small-search-field/small-search-field.module';
import { BackNavigationArrowModule } from '../../shared/elements/back-navigation-arrow/back-navigation-arrow.module';
import { ContactsModalComponent } from '../../shared/elements/_modals/contacts-modal/contacts-modal.component';
import { ArtModalComponent } from '../../shared/elements/_modals/art-modal/art-modal.component';
import { TopNavModule } from '../../shared/elements/top-nav/top-nav.module';

@NgModule({
  declarations: [CreatorListPageComponent, CreatorPageComponent],
  exports: [CreatorListPageComponent],
  imports: [
    CreatorRoutingModule,
    CreatorCardModule,
    CommonModule,
    SmallSearchFieldModule,
    RouterModule,
    BackNavigationArrowModule,
    ContactsModalComponent,
    ArtModalComponent,
    TopNavModule,
  ],
})
export class CreatorModule {}
