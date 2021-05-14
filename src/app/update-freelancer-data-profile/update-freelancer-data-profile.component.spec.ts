import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFreelancerDataProfileComponent } from './update-freelancer-data-profile.component';

describe('UpdateFreelancerDataProfileComponent', () => {
  let component: UpdateFreelancerDataProfileComponent;
  let fixture: ComponentFixture<UpdateFreelancerDataProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFreelancerDataProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFreelancerDataProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
