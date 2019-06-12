import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreSharedComponent } from './padre-shared.component';

describe('PadreSharedComponent', () => {
  let component: PadreSharedComponent;
  let fixture: ComponentFixture<PadreSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
