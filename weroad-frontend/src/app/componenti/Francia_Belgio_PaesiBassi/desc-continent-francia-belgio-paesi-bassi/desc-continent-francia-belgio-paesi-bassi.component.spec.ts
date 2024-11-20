import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentFranciaBelgioPaesiBassiComponent } from './desc-continent-francia-belgio-paesi-bassi.component';

describe('DescContinentFranciaBelgioPaesiBassiComponent', () => {
  let component: DescContinentFranciaBelgioPaesiBassiComponent;
  let fixture: ComponentFixture<DescContinentFranciaBelgioPaesiBassiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentFranciaBelgioPaesiBassiComponent]
    });
    fixture = TestBed.createComponent(DescContinentFranciaBelgioPaesiBassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
