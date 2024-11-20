import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaCoordinatoriComponent } from './cerca-coordinatori.component';

describe('CercaCoordinatoriComponent', () => {
  let component: CercaCoordinatoriComponent;
  let fixture: ComponentFixture<CercaCoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CercaCoordinatoriComponent]
    });
    fixture = TestBed.createComponent(CercaCoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
