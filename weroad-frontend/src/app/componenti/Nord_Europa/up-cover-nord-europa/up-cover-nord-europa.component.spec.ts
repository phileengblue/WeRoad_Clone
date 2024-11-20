import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverNordEuropaComponent } from './up-cover-nord-europa.component';

describe('UpCoverNordEuropaComponent', () => {
  let component: UpCoverNordEuropaComponent;
  let fixture: ComponentFixture<UpCoverNordEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverNordEuropaComponent]
    });
    fixture = TestBed.createComponent(UpCoverNordEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
