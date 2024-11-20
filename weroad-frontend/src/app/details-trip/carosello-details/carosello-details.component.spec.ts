import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselloDetailsComponent } from './carosello-details.component';

describe('CaroselloDetailsComponent', () => {
  let component: CaroselloDetailsComponent;
  let fixture: ComponentFixture<CaroselloDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaroselloDetailsComponent]
    });
    fixture = TestBed.createComponent(CaroselloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
