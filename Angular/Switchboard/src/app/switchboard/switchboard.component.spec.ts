import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchboardComponent } from './switchboard.component';

describe('SwitchboardComponent', () => {
  let component: SwitchboardComponent;
  let fixture: ComponentFixture<SwitchboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
