import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiSudAmericaComponent } from './viaggi-sud-america.component';

describe('ViaggiSudAmericaComponent', () => {
  let component: ViaggiSudAmericaComponent;
  let fixture: ComponentFixture<ViaggiSudAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiSudAmericaComponent]
    });
    fixture = TestBed.createComponent(ViaggiSudAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
