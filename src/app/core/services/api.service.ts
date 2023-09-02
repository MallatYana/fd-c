import { Injectable } from '@angular/core';
import { createClient } from 'pexels';
import { GalleryItem } from '../models/gallery-item';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  client = createClient('wVHDN9WSSDynEBMMvZCx9XhVq4JntfH2sm4UTpjgTO7gl6QZzE8kQyna');

  getItems(query: string, per_page: number): Promise<any> {
    return this.client.photos.search({ query: query, per_page: per_page });
  }

  getArtists(query: string, per_page: number): Promise<any> {
    return this.client.photos.search({ query: query, per_page: per_page });
  }
}
