import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentSudEstAsiaticoComponent } from './desc-continent-sud-est-asiatico.component';

describe('DescContinentSudEstAsiaticoComponent', () => {
  let component: DescContinentSudEstAsiaticoComponent;
  let fixture: ComponentFixture<DescContinentSudEstAsiaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentSudEstAsiaticoComponent]
    });
    fixture = TestBed.createComponent(DescContinentSudEstAsiaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
