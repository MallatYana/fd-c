import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { WishlistPageRoutingModule } from './wishlist-page-routing.module';

import { TopNavModule } from '../../shared/elements/top-nav/top-nav.module';
import { WishlistCardModule } from '../../shared/elements/_cards/wishlist-card/wishlist-card.module';

@NgModule({
  declarations: [WishlistPageComponent],
  exports: [WishlistPageComponent],
  imports: [
    CommonModule,
    TopNavModule,
    WishlistPageRoutingModule,
    WishlistCardModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
  ],
})
export class WishlistPageModule {}
