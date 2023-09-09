import { Component, OnDestroy } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'contacts-modal',
  standalone: true,
  templateUrl: './contacts-modal.component.html',
  styleUrls: ['./contacts-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ContactsModalComponent {
  constructor(
    private config: NgbModalConfig,
    private modalService: NgbModal,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any): void {
    this.modalService.open(content, { centered: true, backdrop: true });
  }
}
