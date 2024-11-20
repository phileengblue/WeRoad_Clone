import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDragAndDropComponent } from './trip-drag-and-drop.component';

describe('TripDragAndDropComponent', () => {
  let component: TripDragAndDropComponent;
  let fixture: ComponentFixture<TripDragAndDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripDragAndDropComponent]
    });
    fixture = TestBed.createComponent(TripDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
