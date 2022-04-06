import { TestBed } from '@angular/core/testing';

import { AnnoInvitService } from './anno-invit.service';

describe('AnnoInvitService', () => {
  let service: AnnoInvitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoInvitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
