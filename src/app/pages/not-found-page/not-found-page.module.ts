import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TopNavModule } from '../../shared/elements/top-nav/top-nav.module';

@NgModule({
  declarations: [NotFoundPageComponent],
  exports: [NotFoundPageComponent],
  imports: [CommonModule, TopNavModule],
})
export class NotFoundPageModule {}
