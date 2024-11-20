import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiventaCoordinatoreComponent } from './diventa-coordinatore.component';

describe('DiventaCoordinatoreComponent', () => {
  let component: DiventaCoordinatoreComponent;
  let fixture: ComponentFixture<DiventaCoordinatoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiventaCoordinatoreComponent]
    });
    fixture = TestBed.createComponent(DiventaCoordinatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
