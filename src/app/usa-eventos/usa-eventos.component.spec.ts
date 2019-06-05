import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaEventosComponent } from './usa-eventos.component';

describe('UsaEventosComponent', () => {
  let component: UsaEventosComponent;
  let fixture: ComponentFixture<UsaEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
