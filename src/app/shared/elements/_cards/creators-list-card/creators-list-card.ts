import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreatorsListCardComponent } from './creators-list-card/creators-list-card.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CreatorsListCardComponent],
  exports: [CreatorsListCardComponent],
  imports: [CommonModule, RouterModule, NgbTooltipModule],
})
export class CreatorsListCard {}
