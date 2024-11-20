import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiCentroAmericaComponent } from './viaggi-centro-america.component';

describe('ViaggiCentroAmericaComponent', () => {
  let component: ViaggiCentroAmericaComponent;
  let fixture: ComponentFixture<ViaggiCentroAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiCentroAmericaComponent]
    });
    fixture = TestBed.createComponent(ViaggiCentroAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
