import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiFranciaComponent } from './viaggi-francia.component';

describe('ViaggiFranciaComponent', () => {
  let component: ViaggiFranciaComponent;
  let fixture: ComponentFixture<ViaggiFranciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiFranciaComponent]
    });
    fixture = TestBed.createComponent(ViaggiFranciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
