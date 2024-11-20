import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniEuropaComponent } from './card-destinazioni-europa.component';

describe('CardDestinazioniEuropaComponent', () => {
  let component: CardDestinazioniEuropaComponent;
  let fixture: ComponentFixture<CardDestinazioniEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniEuropaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
