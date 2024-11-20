import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiEstEuropaComponent } from './viaggi-est-europa.component';

describe('ViaggiEstEuropaComponent', () => {
  let component: ViaggiEstEuropaComponent;
  let fixture: ComponentFixture<ViaggiEstEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiEstEuropaComponent]
    });
    fixture = TestBed.createComponent(ViaggiEstEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
