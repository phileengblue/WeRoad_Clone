import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniAfricaComponent } from './card-destinazioni-africa.component';

describe('CardDestinazioniAfricaComponent', () => {
  let component: CardDestinazioniAfricaComponent;
  let fixture: ComponentFixture<CardDestinazioniAfricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniAfricaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
