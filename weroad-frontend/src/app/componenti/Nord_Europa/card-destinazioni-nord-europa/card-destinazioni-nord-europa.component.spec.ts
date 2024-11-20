import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniNordEuropaComponent } from './card-destinazioni-nord-europa.component';

describe('CardDestinazioniNordEuropaComponent', () => {
  let component: CardDestinazioniNordEuropaComponent;
  let fixture: ComponentFixture<CardDestinazioniNordEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniNordEuropaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniNordEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
