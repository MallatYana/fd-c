import { NgModule } from '@angular/core';
import { CreatorCardComponent } from './creator-card/creator-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CreatorCardComponent],
  exports: [CreatorCardComponent],
  imports: [CommonModule],
})
export class CreatorCardModule {}
