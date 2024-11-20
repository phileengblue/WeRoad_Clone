import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniComponent } from './card-destinazioni.component';

describe('CardDestinazioniComponent', () => {
  let component: CardDestinazioniComponent;
  let fixture: ComponentFixture<CardDestinazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
