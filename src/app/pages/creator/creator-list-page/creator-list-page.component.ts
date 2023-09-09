import { Component, OnInit } from '@angular/core';
import { CreatorItem } from '../../../core/models/creator-item';
import { Guid } from 'guid-typescript';
import { ApiService } from '../../../core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-page',
  templateUrl: './creator-list-page.component.html',
  styleUrls: ['./creator-list-page.component.scss'],
})
export class CreatorListPageComponent implements OnInit {
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  creators: CreatorItem[] = [];
  queries = ['all', 'painters', 'writers'];
  currentQuery = 'all';

  ngOnInit(): void {
    this.currentQuery = this.router.parseUrl(this.router.url).queryParams['type'] || 'all';
    this.getData(this.currentQuery);
  }

  //just while i don't have a backend
  getData(query: string): void {
    this.creators = [];
    switch (query) {
      case 'all':
        this.getCreators('Woman', 15);
        this.getCreators('Kids', 15);
        break;
      case 'painters':
        this.getCreators('Woman', 15);
        break;
      case 'writers':
        this.getCreators('Kids', 15);
        break;
    }
  }
  //till here
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

  setQuery(query: string): void {
    this.currentQuery = query;
    if (query === 'all') {
      this.router.navigate(['/creators']);
      this.getData('all');
    } else {
      this.router.navigate(['/creators'], { queryParams: { type: query } });
      this.getData(query);
    }
  }
}
