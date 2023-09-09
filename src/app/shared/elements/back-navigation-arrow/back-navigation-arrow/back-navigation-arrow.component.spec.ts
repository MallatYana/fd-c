import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavigationArrowComponent } from './back-navigation-arrow.component';

describe('BackNavigationArrowComponent', () => {
  let component: BackNavigationArrowComponent;
  let fixture: ComponentFixture<BackNavigationArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNavigationArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackNavigationArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
