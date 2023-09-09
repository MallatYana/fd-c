import { Component, OnDestroy } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'about-us-modal',
  standalone: true,
  templateUrl: './about-us-modal.component.html',
  styleUrls: ['./about-us-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class AboutUsModalComponent {
  constructor(
    private config: NgbModalConfig,
    private modalService: NgbModal,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any): void {
    this.modalService.open(content, { backdrop: true });
  }
}
