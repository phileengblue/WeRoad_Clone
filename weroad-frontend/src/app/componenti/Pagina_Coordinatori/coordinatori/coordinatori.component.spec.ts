import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatoriComponent } from './coordinatori.component';

describe('CoordinatoriComponent', () => {
  let component: CoordinatoriComponent;
  let fixture: ComponentFixture<CoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatoriComponent]
    });
    fixture = TestBed.createComponent(CoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
