import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpolicyclientComponent } from './logpolicyclient.component';

describe('LogpolicyclientComponent', () => {
  let component: LogpolicyclientComponent;
  let fixture: ComponentFixture<LogpolicyclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogpolicyclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpolicyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
