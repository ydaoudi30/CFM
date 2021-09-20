import { TestBed } from '@angular/core/testing';

import { TransferidService } from './transferid.service';

describe('TransferidService', () => {
  let service: TransferidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
