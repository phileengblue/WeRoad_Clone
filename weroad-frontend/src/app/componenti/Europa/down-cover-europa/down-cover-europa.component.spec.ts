import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverEuropaComponent } from './down-cover-europa.component';

describe('DownCoverEuropaComponent', () => {
  let component: DownCoverEuropaComponent;
  let fixture: ComponentFixture<DownCoverEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverEuropaComponent]
    });
    fixture = TestBed.createComponent(DownCoverEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
