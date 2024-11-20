import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCardCoordinatoriComponent } from './circle-card-coordinatori.component';

describe('CircleCardCoordinatoriComponent', () => {
  let component: CircleCardCoordinatoriComponent;
  let fixture: ComponentFixture<CircleCardCoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleCardCoordinatoriComponent]
    });
    fixture = TestBed.createComponent(CircleCardCoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
