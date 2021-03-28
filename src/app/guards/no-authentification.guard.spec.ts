import { TestBed } from '@angular/core/testing';

import { NoAuthentificationGuard } from './no-authentification.guard';

describe('NoAuthentificationGuardGuard', () => {
  let guard: NoAuthentificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAuthentificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
