import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../core/services/api.service';
import { GalleryItem } from '../../../../../core/models/gallery-item';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss'],
})
export class GalleryCardComponent implements OnInit {
  constructor(private api: ApiService) {}

  images = [1, 2, 3, 3, 2, 1]; //запрос к серверу на последние 3-6 картинок не НЦа
  galleryItems: GalleryItem[] = [];

  ngOnInit(): void {}

  //here will come all latest jobs but definitely not 18+
}
