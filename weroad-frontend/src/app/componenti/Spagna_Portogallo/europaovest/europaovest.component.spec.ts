import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaovestComponent } from './europaovest.component';

describe('EuropaovestComponent', () => {
  let component: EuropaovestComponent;
  let fixture: ComponentFixture<EuropaovestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuropaovestComponent]
    });
    fixture = TestBed.createComponent(EuropaovestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
