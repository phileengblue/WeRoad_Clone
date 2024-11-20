import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSummaryComponent } from './page-summary.component';

describe('PageSummaryComponent', () => {
  let component: PageSummaryComponent;
  let fixture: ComponentFixture<PageSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSummaryComponent]
    });
    fixture = TestBed.createComponent(PageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
