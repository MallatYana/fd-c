import { NgModule } from '@angular/core';

import { RegisterPageComponent } from './register-page/register-page.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopNavModule } from '../../shared/elements/top-nav/top-nav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RegisterPageComponent],
  exports: [RegisterPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    TopNavModule,
    FormsModule,
    NgbTooltipModule,
    ReactiveFormsModule,
  ],
})
export class RegisterPageModule {}
