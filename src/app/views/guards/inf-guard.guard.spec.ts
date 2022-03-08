import { TestBed } from '@angular/core/testing';

import { InfGuardGuard } from './inf-guard.guard';

describe('InfGuardGuard', () => {
  let guard: InfGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
