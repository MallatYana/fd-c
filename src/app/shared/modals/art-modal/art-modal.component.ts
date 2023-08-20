import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem } from '../../../core/models/gallery-item';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'art-modal',
  standalone: true,
  templateUrl: './art-modal.component.html',
  styleUrls: ['./art-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  imports: [ NgbTooltipModule, CommonModule ],
})
export class ArtModalComponent implements OnInit {
  @Input() previewSize = { width: 0, height: 0 };
  @Input() item: GalleryItem = {
    url: '',
    description: '',
    author: '',
    authorLink: '',
    tooltip: 'can not load'
  };
  @Input() isArt = true;
  @Input() writerFullLink = '';

  madeBy = this.isArt ? 'paint by ' : 'written by ';

  constructor(
    private config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.checkMobile();
  }

  open(content: any): void {
    this.modalService.open(content);
  }

  checkMobile(): void {
    if (window.innerWidth < 800) this.previewSize.width = 21.9;
  }
}
