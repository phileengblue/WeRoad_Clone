import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCarrellComponent } from './total-carrell.component';

describe('TotalCarrellComponent', () => {
  let component: TotalCarrellComponent;
  let fixture: ComponentFixture<TotalCarrellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCarrellComponent]
    });
    fixture = TestBed.createComponent(TotalCarrellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
