import { Component, OnDestroy } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rules-modal',
  standalone: true,
  templateUrl: './rules-modal.component.html',
  styleUrls: ['./rules-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class RulesModalComponent {
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
