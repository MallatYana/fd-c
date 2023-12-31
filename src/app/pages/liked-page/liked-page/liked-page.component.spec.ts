import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedPageComponent } from './liked-page.component';

describe('ViewerPageComponent', () => {
  let component: LikedPageComponent;
  let fixture: ComponentFixture<LikedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikedPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LikedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
