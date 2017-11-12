import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyan3Component } from './super-saiyan-3.component';

describe('SuperSaiyan3Component', () => {
  let component: SuperSaiyan3Component;
  let fixture: ComponentFixture<SuperSaiyan3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyan3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
