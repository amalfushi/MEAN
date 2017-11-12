import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyan2Component } from './super-saiyan-2.component';

describe('SuperSaiyan2Component', () => {
  let component: SuperSaiyan2Component;
  let fixture: ComponentFixture<SuperSaiyan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
