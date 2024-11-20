import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniSudEstAsiaticoComponent } from './card-destinazioni-sud-est-asiatico.component';

describe('CardDestinazioniSudEstAsiaticoComponent', () => {
  let component: CardDestinazioniSudEstAsiaticoComponent;
  let fixture: ComponentFixture<CardDestinazioniSudEstAsiaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniSudEstAsiaticoComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniSudEstAsiaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
