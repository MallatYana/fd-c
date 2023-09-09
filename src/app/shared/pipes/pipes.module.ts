import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTruncatePipe } from './card-truncate.pipe';

@NgModule({
  declarations: [CardTruncatePipe],
  exports: [CardTruncatePipe],
  imports: [CommonModule],
})
export class PipesModule {}
