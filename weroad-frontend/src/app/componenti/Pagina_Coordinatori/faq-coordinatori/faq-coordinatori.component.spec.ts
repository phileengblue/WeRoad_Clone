import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCoordinatoriComponent } from './faq-coordinatori.component';

describe('FaqCoordinatoriComponent', () => {
  let component: FaqCoordinatoriComponent;
  let fixture: ComponentFixture<FaqCoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqCoordinatoriComponent]
    });
    fixture = TestBed.createComponent(FaqCoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
