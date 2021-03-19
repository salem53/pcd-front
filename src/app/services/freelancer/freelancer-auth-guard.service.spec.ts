import { TestBed } from '@angular/core/testing';

import { FreelancerAuthGuardService } from './freelancer-auth-guard.service';

describe('FreelancerAuthGuardService', () => {
  let service: FreelancerAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
