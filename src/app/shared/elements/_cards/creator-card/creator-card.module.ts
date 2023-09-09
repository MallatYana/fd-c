import { NgModule } from '@angular/core';
import { CreatorCardComponent } from './creator-card/creator-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [CreatorCardComponent],
  exports: [CreatorCardComponent],
  imports: [CommonModule, RouterModule, PipesModule],
})
export class CreatorCardModule {}
