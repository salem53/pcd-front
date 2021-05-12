import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutAdminComponent } from './signout-admin.component';

describe('SignoutAdminComponent', () => {
  let component: SignoutAdminComponent;
  let fixture: ComponentFixture<SignoutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignoutAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
