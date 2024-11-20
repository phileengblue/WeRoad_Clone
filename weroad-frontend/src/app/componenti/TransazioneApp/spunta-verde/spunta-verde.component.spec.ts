import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpuntaVerdeComponent } from './spunta-verde.component';

describe('SpuntaVerdeComponent', () => {
  let component: SpuntaVerdeComponent;
  let fixture: ComponentFixture<SpuntaVerdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpuntaVerdeComponent]
    });
    fixture = TestBed.createComponent(SpuntaVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
