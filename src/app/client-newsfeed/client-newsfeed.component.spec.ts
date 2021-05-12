import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNewsfeedComponent } from './client-newsfeed.component';

describe('ClientNewsfeedComponent', () => {
  let component: ClientNewsfeedComponent;
  let fixture: ComponentFixture<ClientNewsfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNewsfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
