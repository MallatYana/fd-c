import { Component, Input, OnInit } from '@angular/core';
import { CreatorItem } from '../../../../../core/models/creator-item';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.scss'],
})
export class CreatorCardComponent implements OnInit {
  @Input() creator: CreatorItem = {
    id: Guid.create(),
    nickName: '',
    avatar: '',
    mainInfo: '',
    contacts: '',
    price: [],
  };

  liked = false;

  ngOnInit() {
    this.creator.mainInfo =
      this.creator.mainInfo + this.creator.mainInfo + this.creator.mainInfo + this.creator.mainInfo;
  }

  likeToggle(): void {
    this.liked = !this.liked;
  }
}
