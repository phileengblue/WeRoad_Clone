import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniAsiaComponent } from './card-destinazioni-asia.component';

describe('CardDestinazioniAsiaComponent', () => {
  let component: CardDestinazioniAsiaComponent;
  let fixture: ComponentFixture<CardDestinazioniAsiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniAsiaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
