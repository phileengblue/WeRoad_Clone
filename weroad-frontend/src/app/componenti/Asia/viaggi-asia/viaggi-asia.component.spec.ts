import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiAsiaComponent } from './viaggi-asia.component';

describe('ViaggiAsiaComponent', () => {
  let component: ViaggiAsiaComponent;
  let fixture: ComponentFixture<ViaggiAsiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiAsiaComponent]
    });
    fixture = TestBed.createComponent(ViaggiAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
