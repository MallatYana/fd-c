import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsListCardComponent } from './creators-list-card.component';

describe('ArtistsListCardComponent', () => {
  let component: CreatorsListCardComponent;
  let fixture: ComponentFixture<CreatorsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatorsListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
