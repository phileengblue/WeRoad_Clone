import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeedbackComponent } from './page-feedback.component';

describe('PageFeedbackComponent', () => {
  let component: PageFeedbackComponent;
  let fixture: ComponentFixture<PageFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFeedbackComponent]
    });
    fixture = TestBed.createComponent(PageFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
