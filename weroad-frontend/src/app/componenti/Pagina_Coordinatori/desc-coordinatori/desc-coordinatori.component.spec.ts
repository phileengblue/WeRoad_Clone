import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCoordinatoriComponent } from './desc-coordinatori.component';

describe('DescCoordinatoriComponent', () => {
  let component: DescCoordinatoriComponent;
  let fixture: ComponentFixture<DescCoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescCoordinatoriComponent]
    });
    fixture = TestBed.createComponent(DescCoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
