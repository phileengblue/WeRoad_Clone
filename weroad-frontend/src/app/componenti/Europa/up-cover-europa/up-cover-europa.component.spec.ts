import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverEuropaComponent } from './up-cover-europa.component';

describe('UpCoverEuropaComponent', () => {
  let component: UpCoverEuropaComponent;
  let fixture: ComponentFixture<UpCoverEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverEuropaComponent]
    });
    fixture = TestBed.createComponent(UpCoverEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
