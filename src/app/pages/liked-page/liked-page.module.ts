import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedPageComponent } from './liked-page/liked-page.component';
import { LikedPageRoutingModule } from './liked-page-routing.module';
import { TopNavModule } from '../../shared/elements/top-nav/top-nav.module';

@NgModule({
  declarations: [LikedPageComponent],
  exports: [LikedPageComponent],
  imports: [CommonModule, TopNavModule, LikedPageRoutingModule],
})
export class LikedPageModule {}
