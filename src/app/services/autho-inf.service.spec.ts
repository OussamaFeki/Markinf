import { TestBed } from '@angular/core/testing';

import { AuthoInfService } from './autho-inf.service';

describe('AuthoInfService', () => {
  let service: AuthoInfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoInfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
