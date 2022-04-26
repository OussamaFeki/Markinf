import { TestBed } from '@angular/core/testing';

import { FbserveService } from './fbserve.service';

describe('FbserveService', () => {
  let service: FbserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
