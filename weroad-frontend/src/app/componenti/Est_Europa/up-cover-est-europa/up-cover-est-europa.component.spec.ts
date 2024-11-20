import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverEstEuropaComponent } from './up-cover-est-europa.component';

describe('UpCoverEstEuropaComponent', () => {
  let component: UpCoverEstEuropaComponent;
  let fixture: ComponentFixture<UpCoverEstEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverEstEuropaComponent]
    });
    fixture = TestBed.createComponent(UpCoverEstEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
