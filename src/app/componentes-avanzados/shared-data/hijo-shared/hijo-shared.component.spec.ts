import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoSharedComponent } from './hijo-shared.component';

describe('HijoSharedComponent', () => {
  let component: HijoSharedComponent;
  let fixture: ComponentFixture<HijoSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
