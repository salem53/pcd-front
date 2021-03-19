import { TestBed } from '@angular/core/testing';

import { FreelancerAuthenticationService } from './freelancer-authentication.service';

describe('FreelancerAuthenticationService', () => {
  let service: FreelancerAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
