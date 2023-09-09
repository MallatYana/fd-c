import { TestBed } from '@angular/core/testing';

import { OnLoggedGuard } from './on-logged.guard';

describe('OnLoggedGuard', () => {
  let guard: OnLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
