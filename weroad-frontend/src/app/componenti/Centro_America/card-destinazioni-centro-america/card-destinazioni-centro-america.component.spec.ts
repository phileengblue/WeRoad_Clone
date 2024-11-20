import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniCentroAmericaComponent } from './card-destinazioni-centro-america.component';

describe('CardDestinazioniCentroAmericaComponent', () => {
  let component: CardDestinazioniCentroAmericaComponent;
  let fixture: ComponentFixture<CardDestinazioniCentroAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniCentroAmericaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniCentroAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
