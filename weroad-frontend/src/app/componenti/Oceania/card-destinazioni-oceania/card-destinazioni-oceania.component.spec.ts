import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniOceaniaComponent } from './card-destinazioni-oceania.component';

describe('CardDestinazioniOceaniaComponent', () => {
  let component: CardDestinazioniOceaniaComponent;
  let fixture: ComponentFixture<CardDestinazioniOceaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniOceaniaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
