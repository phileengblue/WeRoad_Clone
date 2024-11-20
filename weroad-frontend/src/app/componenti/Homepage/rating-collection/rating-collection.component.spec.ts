import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCollectionComponent } from './rating-collection.component';

describe('RatingCollectionComponent', () => {
  let component: RatingCollectionComponent;
  let fixture: ComponentFixture<RatingCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingCollectionComponent]
    });
    fixture = TestBed.createComponent(RatingCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
