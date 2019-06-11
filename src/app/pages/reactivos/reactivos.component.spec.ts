import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivosComponent } from './reactivos.component';

describe('ReactivosComponent', () => {
  let component: ReactivosComponent;
  let fixture: ComponentFixture<ReactivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
