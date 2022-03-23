import { TestBed } from '@angular/core/testing';

import { UpprodImgService } from './upprod-img.service';

describe('UpprodImgService', () => {
  let service: UpprodImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpprodImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
