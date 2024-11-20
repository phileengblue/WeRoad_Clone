import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentEstEuropaComponent } from './desc-continent-est-europa.component';

describe('DescContinentEstEuropaComponent', () => {
  let component: DescContinentEstEuropaComponent;
  let fixture: ComponentFixture<DescContinentEstEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentEstEuropaComponent]
    });
    fixture = TestBed.createComponent(DescContinentEstEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
