import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentNordEuropaComponent } from './desc-continent-nord-europa.component';

describe('DescContinentNordEuropaComponent', () => {
  let component: DescContinentNordEuropaComponent;
  let fixture: ComponentFixture<DescContinentNordEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentNordEuropaComponent]
    });
    fixture = TestBed.createComponent(DescContinentNordEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
