import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentSudAmericaComponent } from './desc-continent-sud-america.component';

describe('DescContinentSudAmericaComponent', () => {
  let component: DescContinentSudAmericaComponent;
  let fixture: ComponentFixture<DescContinentSudAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentSudAmericaComponent]
    });
    fixture = TestBed.createComponent(DescContinentSudAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
