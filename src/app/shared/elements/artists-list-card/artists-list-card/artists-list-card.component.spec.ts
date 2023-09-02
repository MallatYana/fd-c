import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListCardComponent } from './artists-list-card.component';

describe('ArtistsListCardComponent', () => {
  let component: ArtistsListCardComponent;
  let fixture: ComponentFixture<ArtistsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
