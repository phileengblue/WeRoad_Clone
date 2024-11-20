import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselloComponent } from './carosello.component';

describe('CaroselloComponent', () => {
  let component: CaroselloComponent;
  let fixture: ComponentFixture<CaroselloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaroselloComponent]
    });
    fixture = TestBed.createComponent(CaroselloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
