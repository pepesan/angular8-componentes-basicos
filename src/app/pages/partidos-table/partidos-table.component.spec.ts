import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosTableComponent } from './partidos-table.component';

describe('PartidosTableComponent', () => {
  let component: PartidosTableComponent;
  let fixture: ComponentFixture<PartidosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
