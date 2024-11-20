import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentOceaniaComponent } from './desc-continent-oceania.component';

describe('DescContinentOceaniaComponent', () => {
  let component: DescContinentOceaniaComponent;
  let fixture: ComponentFixture<DescContinentOceaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentOceaniaComponent]
    });
    fixture = TestBed.createComponent(DescContinentOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
