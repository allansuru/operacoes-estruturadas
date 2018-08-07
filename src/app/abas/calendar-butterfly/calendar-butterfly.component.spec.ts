import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarButterflyComponent } from './calendar-butterfly.component';

describe('CalendarButterflyComponent', () => {
  let component: CalendarButterflyComponent;
  let fixture: ComponentFixture<CalendarButterflyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarButterflyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
