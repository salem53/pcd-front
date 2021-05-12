import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutClientComponent } from './signout-client.component';

describe('SignoutClientComponent', () => {
  let component: SignoutClientComponent;
  let fixture: ComponentFixture<SignoutClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignoutClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
