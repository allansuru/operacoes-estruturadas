import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioTemporalCallComponent } from './ratio-temporal-call.component';

describe('RatioTemporalCallComponent', () => {
  let component: RatioTemporalCallComponent;
  let fixture: ComponentFixture<RatioTemporalCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatioTemporalCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioTemporalCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
