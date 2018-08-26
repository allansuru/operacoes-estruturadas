import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraddleCobertoComponent } from './straddle-coberto.component';

describe('StraddleCobertoComponent', () => {
  let component: StraddleCobertoComponent;
  let fixture: ComponentFixture<StraddleCobertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraddleCobertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraddleCobertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
