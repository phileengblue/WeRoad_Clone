import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiItinerariNordEuropaComponent } from './viaggi-itinerari-nord-europa.component';

describe('ViaggiItinerariNordEuropaComponent', () => {
  let component: ViaggiItinerariNordEuropaComponent;
  let fixture: ComponentFixture<ViaggiItinerariNordEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiItinerariNordEuropaComponent]
    });
    fixture = TestBed.createComponent(ViaggiItinerariNordEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
