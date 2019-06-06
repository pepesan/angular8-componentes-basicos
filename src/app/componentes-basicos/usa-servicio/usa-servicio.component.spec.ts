import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaServicioComponent } from './usa-servicio.component';

describe('UsaServicioComponent', () => {
  let component: UsaServicioComponent;
  let fixture: ComponentFixture<UsaServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
