import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixGridDetailsTripComponent } from './six-grid-details-trip.component';

describe('SixGridDetailsTripComponent', () => {
  let component: SixGridDetailsTripComponent;
  let fixture: ComponentFixture<SixGridDetailsTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixGridDetailsTripComponent]
    });
    fixture = TestBed.createComponent(SixGridDetailsTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
