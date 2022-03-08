import { TestBed } from '@angular/core/testing';

import { AuthoAdminService } from './autho-admin.service';

describe('AuthoAdminService', () => {
  let service: AuthoAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
