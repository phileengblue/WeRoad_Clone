import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiEuropaComponent } from './viaggi-europa.component';

describe('ViaggiEuropaComponent', () => {
  let component: ViaggiEuropaComponent;
  let fixture: ComponentFixture<ViaggiEuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiEuropaComponent]
    });
    fixture = TestBed.createComponent(ViaggiEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
