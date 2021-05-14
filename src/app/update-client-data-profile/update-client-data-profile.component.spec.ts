import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientDataProfileComponent } from './update-client-data-profile.component';

describe('UpdateClientDataProfileComponent', () => {
  let component: UpdateClientDataProfileComponent;
  let fixture: ComponentFixture<UpdateClientDataProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientDataProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientDataProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
