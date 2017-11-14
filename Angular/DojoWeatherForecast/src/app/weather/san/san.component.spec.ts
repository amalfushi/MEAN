import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanComponent } from './san.component';

describe('SanComponent', () => {
  let component: SanComponent;
  let fixture: ComponentFixture<SanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
