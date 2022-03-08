import { TestBed } from '@angular/core/testing';

import { GaurdManagGuard } from './gaurd-manag.guard';

describe('GaurdManagGuard', () => {
  let guard: GaurdManagGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GaurdManagGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
