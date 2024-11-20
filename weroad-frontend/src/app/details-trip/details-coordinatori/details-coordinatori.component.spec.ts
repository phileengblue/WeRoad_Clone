import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCoordinatoriComponent } from './details-coordinatori.component';

describe('DetailsCoordinatoriComponent', () => {
  let component: DetailsCoordinatoriComponent;
  let fixture: ComponentFixture<DetailsCoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCoordinatoriComponent]
    });
    fixture = TestBed.createComponent(DetailsCoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
