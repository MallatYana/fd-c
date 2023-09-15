import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistItem } from '../../../../../core/models/wishlist-item';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss'],
})
export class WishlistCardComponent {
  @Input() wish: WishlistItem = {
    id: '10',
    userId: Guid.create(),
    mainDescription: 'Was not get',
    extraDescription: null,
    assignCreatorId: null,
    assignCreatorNickName: null,
    assignCreatorUrl: null,
  };
  @Output() isShouldDelete = new EventEmitter<string>();

  delBtnInnerHtml = '<i class="bi bi-trash3"></i>';
  isExtraShowed = false;

  deleteWish(id: string) {
    this.isShouldDelete.emit(id);
  }
}
