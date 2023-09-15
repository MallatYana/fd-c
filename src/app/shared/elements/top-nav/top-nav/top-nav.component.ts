import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Input() isEdit = false;

  isLogged = true;
  btnInnerHtml = '<i class="bi bi-box-arrow-in-left"></i>';

  logInToggle(isNeedToBeToggled: boolean) {
    if (isNeedToBeToggled) {
      this.isLogged = !this.isLogged;
    }
  }
}
