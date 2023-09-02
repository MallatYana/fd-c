import { Component, OnInit } from '@angular/core';
import { CreatorItem } from '../../../core/models/creator-item';
import { Guid } from 'guid-typescript';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.scss'],
})
export class CreatorPageComponent implements OnInit {
  constructor(private api: ApiService) {}

  creators: CreatorItem[] = [];

  ngOnInit(): void {
    this.getCreators('Woman', 14);
  }

  getCreators(query: string, per_page: number): void {
    this.api.getArtists(query, per_page).then((response: any) => {
      response.photos.forEach((p: any) => {
        const item: CreatorItem = {
          id: Guid.create(),
          nickName: '',
          avatar: '',
          mainInfo: '',
          contacts: '',
          price: [],
        };
        item.nickName = p.photographer;
        item.avatar = p.src.original;
        item.contacts = p.alt;
        item.mainInfo = p.alt;
        item.price.push(p.src.original);
        item.price.push(p.src.original);
        this.creators.push(item);
      });
    });
  }
}
