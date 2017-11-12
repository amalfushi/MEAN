import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyan4Component } from './super-saiyan-4.component';

describe('SuperSaiyan4Component', () => {
  let component: SuperSaiyan4Component;
  let fixture: ComponentFixture<SuperSaiyan4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyan4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
