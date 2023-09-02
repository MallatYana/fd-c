import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../../../core/models/gallery-item';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
})
export class GalleryPageComponent implements OnInit {
  constructor(private api: ApiService) {}

  galleryItems: GalleryItem[] = [];

  ngOnInit(): void {
    this.getItems('Nature', 20);
  }

  getItems(query: string, per_page: number) {
    this.api.getItems(query, per_page).then((response: any) => {
      response.photos.forEach((p: any) => {
        const item: GalleryItem = {
          url: '',
          description: '',
          author: '',
          authorLink: '',
          tooltip: 'can not load',
        };
        item.url = p.src.original;
        item.description = p.alt;
        item.tooltip = p.alt.length < 100 ? p.alt : p.alt.slice(0, 100) + '...';
        item.author = p.photographer;
        item.authorLink = p.photographer_url;
        this.galleryItems.push(item);
      });
    });
  }
}
