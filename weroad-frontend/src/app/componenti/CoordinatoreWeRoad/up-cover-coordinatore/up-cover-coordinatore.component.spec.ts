import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverCoordinatoreComponent } from './up-cover-coordinatore.component';

describe('UpCoverCoordinatoreComponent', () => {
  let component: UpCoverCoordinatoreComponent;
  let fixture: ComponentFixture<UpCoverCoordinatoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverCoordinatoreComponent]
    });
    fixture = TestBed.createComponent(UpCoverCoordinatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
