import { TestBed } from '@angular/core/testing';

import { AuthoManService } from './autho-man.service';

describe('AuthoManService', () => {
  let service: AuthoManService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoManService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
