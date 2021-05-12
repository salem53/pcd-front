import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerNewsfeedComponent } from './freelancer-newsfeed.component';

describe('FreelancerNewsfeedComponent', () => {
  let component: FreelancerNewsfeedComponent;
  let fixture: ComponentFixture<FreelancerNewsfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerNewsfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
