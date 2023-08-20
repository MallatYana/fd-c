import { Component, OnInit } from '@angular/core';
import { createClient } from 'pexels';
import { GalleryItem } from '../../../core/models/gallery-item';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
})
export class GalleryPageComponent implements OnInit {
  query = 'Nature';
  client = createClient('wVHDN9WSSDynEBMMvZCx9XhVq4JntfH2sm4UTpjgTO7gl6QZzE8kQyna');

  galleryItems: GalleryItem[] = [];

  ngOnInit(): void {
    this.getPhotos('Nature', 20);
  }

  getPhotos(query: string, per_page: number): void {
    this.client.photos.search({ query: query, per_page: per_page }).then((response: any) => {
      response.photos.forEach((p: any) => {
        const item: GalleryItem = {
          url: '',
          description: '',
          author: '',
          authorLink: '',
          tooltip: 'can not load'
        };
        item.url = p.src.original;
        item.description = p.alt;
        item.tooltip = p.alt.length < 100 ? p.alt : p.alt.slice(0, 100) + '...';
        item.author = p.photographer;
        item.authorLink = p.photographer_url;
        this.galleryItems.push(item)
      })
    });
  }
}
