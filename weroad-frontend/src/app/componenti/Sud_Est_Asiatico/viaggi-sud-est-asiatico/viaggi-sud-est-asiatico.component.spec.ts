import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiSudEstAsiaticoComponent } from './viaggi-sud-est-asiatico.component';

describe('ViaggiSudEstAsiaticoComponent', () => {
  let component: ViaggiSudEstAsiaticoComponent;
  let fixture: ComponentFixture<ViaggiSudEstAsiaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiSudEstAsiaticoComponent]
    });
    fixture = TestBed.createComponent(ViaggiSudEstAsiaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
