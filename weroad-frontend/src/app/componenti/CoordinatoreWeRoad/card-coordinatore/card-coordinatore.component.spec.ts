import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoordinatoreComponent } from './card-coordinatore.component';

describe('CardCoordinatoreComponent', () => {
  let component: CardCoordinatoreComponent;
  let fixture: ComponentFixture<CardCoordinatoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCoordinatoreComponent]
    });
    fixture = TestBed.createComponent(CardCoordinatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
