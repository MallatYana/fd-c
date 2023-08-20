import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent {
  images = [1, 2, 3] //запрос к серверу на последние 3-6 картинок не НЦа

  

    //here will come all latest jobs but definitely not 18+
}
