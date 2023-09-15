import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-modal',
  standalone: true,
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ConfirmModalComponent {
  @Input() question = 'Sorry some mistake over here';
  @Input() btnInnerHtml = 'just some mistake';
  @Output() isConfirmed = new EventEmitter<boolean>();

  confirmationModal: NgbModalRef | undefined;

  constructor(
    private config: NgbModalConfig,
    private modalService: NgbModal,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any): void {
    this.confirmationModal = this.modalService.open(content, {
      backdrop: true,
      centered: true,
      size: 'sm',
    });
  }

  setConfirm(c: boolean) {
    this.isConfirmed.emit(c);
    this.confirmationModal?.close();
  }
}
