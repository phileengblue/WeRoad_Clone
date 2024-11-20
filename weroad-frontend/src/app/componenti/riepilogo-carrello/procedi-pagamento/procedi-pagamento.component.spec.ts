import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcediPagamentoComponent } from './procedi-pagamento.component';

describe('ProcediPagamentoComponent', () => {
  let component: ProcediPagamentoComponent;
  let fixture: ComponentFixture<ProcediPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcediPagamentoComponent]
    });
    fixture = TestBed.createComponent(ProcediPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
