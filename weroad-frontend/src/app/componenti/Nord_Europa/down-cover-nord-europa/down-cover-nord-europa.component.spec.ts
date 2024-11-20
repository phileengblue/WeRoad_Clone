import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverNordEuropaComponent } from './down-cover-nord-europa.component';

describe('DownCoverNordEuropaComponent', () => {
  let component: DownCoverNordEuropaComponent;
  let fixture: ComponentFixture<DownCoverNordEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverNordEuropaComponent]
    });
    fixture = TestBed.createComponent(DownCoverNordEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
