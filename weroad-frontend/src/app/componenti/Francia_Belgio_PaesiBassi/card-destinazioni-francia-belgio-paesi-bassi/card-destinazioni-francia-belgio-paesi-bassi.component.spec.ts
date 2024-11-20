import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniFranciaBelgioPaesiBassiComponent } from './card-destinazioni-francia-belgio-paesi-bassi.component';

describe('CardDestinazioniFranciaBelgioPaesiBassiComponent', () => {
  let component: CardDestinazioniFranciaBelgioPaesiBassiComponent;
  let fixture: ComponentFixture<CardDestinazioniFranciaBelgioPaesiBassiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniFranciaBelgioPaesiBassiComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniFranciaBelgioPaesiBassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
