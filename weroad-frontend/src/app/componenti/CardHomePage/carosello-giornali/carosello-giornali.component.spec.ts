import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselloGiornaliComponent } from './carosello-giornali.component';

describe('CaroselloGiornaliComponent', () => {
  let component: CaroselloGiornaliComponent;
  let fixture: ComponentFixture<CaroselloGiornaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaroselloGiornaliComponent]
    });
    fixture = TestBed.createComponent(CaroselloGiornaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
