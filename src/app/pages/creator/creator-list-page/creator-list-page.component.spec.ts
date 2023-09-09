import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListPageComponent } from './creator-list-page.component';

describe('ArtistPageComponent', () => {
  let component: CreatorListPageComponent;
  let fixture: ComponentFixture<CreatorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
