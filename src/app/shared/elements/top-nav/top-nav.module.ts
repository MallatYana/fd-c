import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { ConfirmModalComponent } from '../_modals/confirm-modal/confirm-modal.component';
import { LogInModalComponent } from '../_modals/log-in-modal/log-in-modal.component';

@NgModule({
  declarations: [TopNavComponent],
  exports: [TopNavComponent],
  imports: [CommonModule, RouterModule, ConfirmModalComponent, LogInModalComponent],
})
export class TopNavModule {}
