import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniEstEuropaComponent } from './card-destinazioni-est-europa.component';

describe('CardDestinazioniEstEuropaComponent', () => {
  let component: CardDestinazioniEstEuropaComponent;
  let fixture: ComponentFixture<CardDestinazioniEstEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniEstEuropaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniEstEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
