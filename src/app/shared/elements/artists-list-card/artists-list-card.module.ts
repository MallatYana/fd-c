import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsListCardComponent } from './artists-list-card/artists-list-card.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ArtistsListCardComponent],
  exports: [ArtistsListCardComponent],
  imports: [CommonModule, RouterModule, NgbTooltipModule],
})
export class ArtistsListCardModule {}
