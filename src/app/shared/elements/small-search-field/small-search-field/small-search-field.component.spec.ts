import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSearchFieldComponent } from './small-search-field.component';

describe('SmallSearchFieldComponent', () => {
  let component: SmallSearchFieldComponent;
  let fixture: ComponentFixture<SmallSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSearchFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
