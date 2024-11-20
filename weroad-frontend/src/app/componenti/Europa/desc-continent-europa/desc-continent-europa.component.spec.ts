import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentEuropaComponent } from './desc-continent-europa.component';

describe('DescContinentEuropaComponent', () => {
  let component: DescContinentEuropaComponent;
  let fixture: ComponentFixture<DescContinentEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentEuropaComponent]
    });
    fixture = TestBed.createComponent(DescContinentEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
