import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiOceaniaComponent } from './viaggi-oceania.component';

describe('ViaggiOceaniaComponent', () => {
  let component: ViaggiOceaniaComponent;
  let fixture: ComponentFixture<ViaggiOceaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiOceaniaComponent]
    });
    fixture = TestBed.createComponent(ViaggiOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
