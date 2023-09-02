import { NgModule } from '@angular/core';

import { CreatorPageComponent } from './creator-page/creator-page.component';
import { CreatorPageRoutingModule } from './creator-page-routing.module';
import { CreatorCardModule } from '../../shared/elements/creator-card/creator-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CreatorPageComponent],
  exports: [CreatorPageComponent],
  imports: [CreatorPageRoutingModule, CreatorCardModule, CommonModule],
})
export class CreatorPageModule {}
