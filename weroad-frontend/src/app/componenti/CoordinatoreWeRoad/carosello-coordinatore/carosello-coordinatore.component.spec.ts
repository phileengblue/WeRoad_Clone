import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselloCoordinatoreComponent } from './carosello-coordinatore.component';

describe('CaroselloCoordinatoreComponent', () => {
  let component: CaroselloCoordinatoreComponent;
  let fixture: ComponentFixture<CaroselloCoordinatoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaroselloCoordinatoreComponent]
    });
    fixture = TestBed.createComponent(CaroselloCoordinatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
