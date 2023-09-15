import { Component, OnInit } from '@angular/core';
import { AuthChecker } from '../../../core/checkers/auth-checker';
import { WishlistItem } from '../../../core/models/wishlist-item';
import { userWishes } from '../../../shared/helpers/stub-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss'],
})
export class WishlistPageComponent implements OnInit {
  constructor(
    private authChecker: AuthChecker,
    private fb: FormBuilder,
  ) {}

  wishForm!: FormGroup;
  isFormOpened = false; //потом сделать через обзерверы с автозаполением
  infoExtra =
    'Some other notes about your wish. For example exact poses for arts of maybe quotes for text';

  isLogged = true; //false
  isOwner = true; //false
  wishListItems: WishlistItem[] = [];

  ngOnInit() {
    //запрос на бек за данными
    this.wishListItems = userWishes;

    this.authChecker.userId$.subscribe((data) => {
      if (data) {
        this.isLogged = true;
      }
    });

    this.wishForm = this.fb.group({
      assignNickName: [''],
      mainDescription: ['', Validators.required],
      extraDescription: [''],
    });
  }

  addWishItem() {
    const newWish: WishlistItem = {
      id: Math.ceil(Math.random() * Math.random() * 1000).toString(),
      userId: Guid.create(),
      mainDescription: this.wishForm.value.mainDescription,
      extraDescription:
        this.wishForm.value.mainDescription === '' ? null : this.wishForm.value.mainDescription,
      assignCreatorId: Guid.create(),
      assignCreatorNickName:
        this.wishForm.value.assignNickName === '' ? null : this.wishForm.value.assignNickName,
      assignCreatorUrl: '/creators/id',
    };

    this.wishListItems.push(newWish);
    this.resetForm();
  }

  resetForm(): void {
    this.wishForm.reset();
  }
  deleteWishItem(id: string): void {
    this.wishListItems = this.wishListItems.filter((w) => w.id !== id);
  }
}
