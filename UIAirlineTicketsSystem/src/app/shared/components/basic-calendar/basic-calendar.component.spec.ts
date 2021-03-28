import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCalendarComponent } from './basic-calendar.component';

describe('BasicCalendarComponent', () => {
  let component: BasicCalendarComponent;
  let fixture: ComponentFixture<BasicCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
