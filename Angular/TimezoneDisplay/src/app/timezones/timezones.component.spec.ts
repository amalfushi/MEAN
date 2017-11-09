import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezonesComponent } from './timezones.component';

describe('TimezonesComponent', () => {
  let component: TimezonesComponent;
  let fixture: ComponentFixture<TimezonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
