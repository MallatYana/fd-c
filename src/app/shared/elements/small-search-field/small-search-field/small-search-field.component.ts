import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-small-search-field',
  templateUrl: './small-search-field.component.html',
  styleUrls: ['./small-search-field.component.scss']
})
export class SmallSearchFieldComponent {
  searchText = new FormControl('')

  onSubmit() {
    console.log(this.searchText.value, 'a')
  }
}
