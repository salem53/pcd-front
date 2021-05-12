import { TestBed } from '@angular/core/testing';

import { ClientAuthguardService } from './client-authguard.service';

describe('ClientAuthguardService', () => {
  let service: ClientAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
