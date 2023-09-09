import { Component, Input } from '@angular/core';

@Component({
  selector: 'back-navigation-arrow',
  templateUrl: './back-navigation-arrow.component.html',
  styleUrls: ['./back-navigation-arrow.component.scss'],
})
export class BackNavigationArrowComponent {
  @Input() url = '/';
}
