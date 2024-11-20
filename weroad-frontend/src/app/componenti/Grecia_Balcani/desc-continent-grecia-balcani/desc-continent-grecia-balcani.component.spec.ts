import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentGreciaBalcaniComponent } from './desc-continent-grecia-balcani.component';

describe('DescContinentGreciaBalcaniComponent', () => {
  let component: DescContinentGreciaBalcaniComponent;
  let fixture: ComponentFixture<DescContinentGreciaBalcaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentGreciaBalcaniComponent]
    });
    fixture = TestBed.createComponent(DescContinentGreciaBalcaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
