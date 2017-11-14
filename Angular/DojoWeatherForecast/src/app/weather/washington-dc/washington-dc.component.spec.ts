import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonDcComponent } from './washington-dc.component';

describe('WashingtonDcComponent', () => {
  let component: WashingtonDcComponent;
  let fixture: ComponentFixture<WashingtonDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingtonDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtonDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
