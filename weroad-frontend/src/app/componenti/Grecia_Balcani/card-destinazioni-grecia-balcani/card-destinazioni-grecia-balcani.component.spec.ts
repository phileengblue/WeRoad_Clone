import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniGreciaBalcaniComponent } from './card-destinazioni-grecia-balcani.component';

describe('CardDestinazioniGreciaBalcaniComponent', () => {
  let component: CardDestinazioniGreciaBalcaniComponent;
  let fixture: ComponentFixture<CardDestinazioniGreciaBalcaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniGreciaBalcaniComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniGreciaBalcaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
