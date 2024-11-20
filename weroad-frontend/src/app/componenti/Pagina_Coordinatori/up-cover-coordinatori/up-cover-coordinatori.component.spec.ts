import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverCoordinatoriComponent } from './up-cover-coordinatori.component';

describe('UpCoverCoordinatoriComponent', () => {
  let component: UpCoverCoordinatoriComponent;
  let fixture: ComponentFixture<UpCoverCoordinatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverCoordinatoriComponent]
    });
    fixture = TestBed.createComponent(UpCoverCoordinatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
