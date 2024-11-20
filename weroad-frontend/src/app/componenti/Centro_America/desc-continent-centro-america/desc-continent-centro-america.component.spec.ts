import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentCentroAmericaComponent } from './desc-continent-centro-america.component';

describe('DescContinentCentroAmericaComponent', () => {
  let component: DescContinentCentroAmericaComponent;
  let fixture: ComponentFixture<DescContinentCentroAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentCentroAmericaComponent]
    });
    fixture = TestBed.createComponent(DescContinentCentroAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
