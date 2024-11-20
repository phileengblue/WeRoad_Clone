import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggioComponent } from './viaggio.component';

describe('ViaggioComponent', () => {
  let component: ViaggioComponent;
  let fixture: ComponentFixture<ViaggioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggioComponent]
    });
    fixture = TestBed.createComponent(ViaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
