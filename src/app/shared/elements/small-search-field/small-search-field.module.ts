import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SmallSearchFieldComponent } from "./small-search-field/small-search-field.component";

@NgModule({
  declarations: [ SmallSearchFieldComponent ],
  exports: [ SmallSearchFieldComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SmallSearchFieldModule { }
