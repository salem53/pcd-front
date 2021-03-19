import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutFreelancerComponent } from './signout-freelancer.component';

describe('SignoutFreelancerComponent', () => {
  let component: SignoutFreelancerComponent;
  let fixture: ComponentFixture<SignoutFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignoutFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
