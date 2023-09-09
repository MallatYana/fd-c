import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CreatorItem } from '../../../core/models/creator-item';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-creator-page',
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.scss'],
})
export class CreatorPageComponent implements OnInit {
  constructor(private api: ApiService) {}
  creator: CreatorItem = {
    id: Guid.create(),
    nickName: '',
    avatar: '',
    mainInfo: '',
    contacts: '',
    price: [],
  };

  ngOnInit() {
    this.getCreator('Cat', 1);
  }

  getCreator(query: string, per_page: number): void {
    //all data will be get from backend by id
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
        item.mainInfo =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum velit felis, in semper massa faucibus vitae. Donec eget leo dignissim, pellentesque augue a, eleifend leo. Morbi imperdiet metus commodo, porta erat non, rutrum orci. Sed mattis massa libero, id fermentum mi porttitor id. Nam tincidunt enim urna, at tincidunt metus lobortis in. In ac turpis ac est pulvinar condimentum. Quisque eget massa vitae neque consequat condimentum et sit amet nunc. Suspendisse suscipit ante orci, quis fringilla tellus convallis nec. Integer luctus, odio posuere mattis scelerisque, dui risus lobortis elit, nec feugiat felis odio in arcu. Suspendisse ut consectetur turpis, et efficitur libero. Sed elit enim, iaculis nec dui id, vestibulum vulputate orci. Maecenas ante purus, pharetra id blandit id, sodales vitae dui. Sed id quam sit amet risus porta varius sed non felis.'; //мне стыдно за это, да
        item.price.push(p.src.original);
        item.price.push(p.src.original);
        this.creator = item;
      });
    });
  }
}
