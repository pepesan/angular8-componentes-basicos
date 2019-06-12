import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreServiceComponent } from './padre-service.component';

describe('PadreServiceComponent', () => {
  let component: PadreServiceComponent;
  let fixture: ComponentFixture<PadreServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
