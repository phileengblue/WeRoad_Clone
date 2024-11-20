import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiItinerariGreciaComponent } from './viaggi-itinerari-grecia.component';

describe('ViaggiItinerariGreciaComponent', () => {
  let component: ViaggiItinerariGreciaComponent;
  let fixture: ComponentFixture<ViaggiItinerariGreciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiItinerariGreciaComponent]
    });
    fixture = TestBed.createComponent(ViaggiItinerariGreciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
