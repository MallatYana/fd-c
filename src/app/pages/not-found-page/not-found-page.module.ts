import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  exports: [NotFoundPageComponent],
  imports: [CommonModule, RouterModule],
})
export class NotFoundPageModule {}
