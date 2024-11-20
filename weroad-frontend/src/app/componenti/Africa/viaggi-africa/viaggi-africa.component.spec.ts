import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiAfricaComponent } from './viaggi-africa.component';

describe('ViaggiAfricaComponent', () => {
  let component: ViaggiAfricaComponent;
  let fixture: ComponentFixture<ViaggiAfricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiAfricaComponent]
    });
    fixture = TestBed.createComponent(ViaggiAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
