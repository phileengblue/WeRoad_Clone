import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViaggiComponent } from './card-viaggi.component';

describe('CardViaggiComponent', () => {
  let component: CardViaggiComponent;
  let fixture: ComponentFixture<CardViaggiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardViaggiComponent]
    });
    fixture = TestBed.createComponent(CardViaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
