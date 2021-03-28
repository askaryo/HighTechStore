import { TestBed } from '@angular/core/testing';

import { AuthentificationGuardGuard } from './authentification-guard.guard';

describe('AuthentificationGuardGuard', () => {
  let guard: AuthentificationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentificationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
