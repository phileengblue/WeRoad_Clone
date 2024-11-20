import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiNordAmericaComponent } from './viaggi-nord-america.component';

describe('ViaggiNordAmericaComponent', () => {
  let component: ViaggiNordAmericaComponent;
  let fixture: ComponentFixture<ViaggiNordAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiNordAmericaComponent]
    });
    fixture = TestBed.createComponent(ViaggiNordAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
