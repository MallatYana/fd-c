import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistCardComponent } from './wishlist-card/wishlist-card.component';
import { RouterModule } from '@angular/router';
import { ConfirmModalComponent } from '../../_modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [WishlistCardComponent],
  exports: [WishlistCardComponent],
  imports: [CommonModule, RouterModule, ConfirmModalComponent],
})
export class WishlistCardModule {}
