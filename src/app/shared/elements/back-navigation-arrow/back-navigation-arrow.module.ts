import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackNavigationArrowComponent } from './back-navigation-arrow/back-navigation-arrow.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BackNavigationArrowComponent],
  exports: [BackNavigationArrowComponent],
  imports: [CommonModule, RouterModule],
})
export class BackNavigationArrowModule {}
