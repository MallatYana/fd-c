import { Component, Input, OnInit } from '@angular/core';
import { CreatorItem } from '../../../../../core/models/creator-item';
import { ApiService } from '../../../../../core/services/api.service';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-list-card',
  templateUrl: './creators-list-card.component.html',
  styleUrls: ['./creators-list-card.component.scss'],
})
export class CreatorsListCardComponent implements OnInit {
  @Input() artists: CreatorItem[] = [];
  @Input() isArter = false;

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  title = '';
  linkQuery = '';

  ngOnInit(): void {
    this.title = this.isArter ? 'Painters' : 'Writers';
    this.linkQuery = this.isArter ? 'painters' : 'writers';
    const query = this.isArter ? 'People' : 'Men';
    this.getArtists(query, 5);
  }

  getArtists(query: string, per_page: number): void {
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
        item.mainInfo = p.alt.length;
        item.price.push(p.src.original);
        item.price.push(p.src.original);
        this.artists.push(item);
      });
    });
  }

  navigate() {
    this.router.navigate(['/creators'], { queryParams: { type: this.linkQuery } });
  }
}
