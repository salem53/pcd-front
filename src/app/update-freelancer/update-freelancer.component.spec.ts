import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFreelancerComponent } from './update-freelancer.component';

describe('UpdateFreelancerComponent', () => {
  let component: UpdateFreelancerComponent;
  let fixture: ComponentFixture<UpdateFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
