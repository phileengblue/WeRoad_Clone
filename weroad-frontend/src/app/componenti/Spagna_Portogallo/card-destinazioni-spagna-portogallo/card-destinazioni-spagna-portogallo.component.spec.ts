import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinazioniSpagnaPortogalloComponent } from './card-destinazioni-spagna-portogallo.component';

describe('CardDestinazioniSpagnaPortogalloComponent', () => {
  let component: CardDestinazioniSpagnaPortogalloComponent;
  let fixture: ComponentFixture<CardDestinazioniSpagnaPortogalloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinazioniSpagnaPortogalloComponent]
    });
    fixture = TestBed.createComponent(CardDestinazioniSpagnaPortogalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
