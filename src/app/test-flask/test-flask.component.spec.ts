import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFlaskComponent } from './test-flask.component';

describe('TestFlaskComponent', () => {
  let component: TestFlaskComponent;
  let fixture: ComponentFixture<TestFlaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFlaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFlaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
