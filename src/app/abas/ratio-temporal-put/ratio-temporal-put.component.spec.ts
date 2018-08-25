import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioTemporalPutComponent } from './ratio-temporal-put.component';

describe('RatioTemporalPutComponent', () => {
  let component: RatioTemporalPutComponent;
  let fixture: ComponentFixture<RatioTemporalPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatioTemporalPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioTemporalPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
