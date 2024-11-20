import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrisCardCoordinatoriComponent } from './tris-card-coordinatori.component';

describe('TrisCardCoordinatoriComponent', () => {
  let component: TrisCardCoordinatoriComponent;
  let fixture: ComponentFixture<TrisCardCoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrisCardCoordinatoriComponent]
    });
    fixture = TestBed.createComponent(TrisCardCoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
