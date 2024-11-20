import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentMedioOrienteComponent } from './desc-continent-medio-oriente.component';

describe('DescContinentMedioOrienteComponent', () => {
  let component: DescContinentMedioOrienteComponent;
  let fixture: ComponentFixture<DescContinentMedioOrienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentMedioOrienteComponent]
    });
    fixture = TestBed.createComponent(DescContinentMedioOrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
