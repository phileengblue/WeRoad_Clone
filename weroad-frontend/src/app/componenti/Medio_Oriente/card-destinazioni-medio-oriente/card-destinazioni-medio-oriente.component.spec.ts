import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniMedioOrienteComponent } from './card-destinazioni-medio-oriente.component';

describe('CardDestinazioniMedioOrienteComponent', () => {
  let component: CardDestinazioniMedioOrienteComponent;
  let fixture: ComponentFixture<CardDestinazioniMedioOrienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniMedioOrienteComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniMedioOrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
