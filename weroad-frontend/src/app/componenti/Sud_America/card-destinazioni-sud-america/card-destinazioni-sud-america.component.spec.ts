import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniSudAmericaComponent } from './card-destinazioni-sud-america.component';

describe('CardDestinazioniSudAmericaComponent', () => {
  let component: CardDestinazioniSudAmericaComponent;
  let fixture: ComponentFixture<CardDestinazioniSudAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniSudAmericaComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniSudAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
