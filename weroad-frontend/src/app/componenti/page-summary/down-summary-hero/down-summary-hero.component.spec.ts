import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownSummaryHeroComponent } from './down-summary-hero.component';

describe('DownSummaryHeroComponent', () => {
  let component: DownSummaryHeroComponent;
  let fixture: ComponentFixture<DownSummaryHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownSummaryHeroComponent]
    });
    fixture = TestBed.createComponent(DownSummaryHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
