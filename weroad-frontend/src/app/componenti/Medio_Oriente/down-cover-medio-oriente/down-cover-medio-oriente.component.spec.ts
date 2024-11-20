import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverMedioOrienteComponent } from './down-cover-medio-oriente.component';

describe('DownCoverMedioOrienteComponent', () => {
  let component: DownCoverMedioOrienteComponent;
  let fixture: ComponentFixture<DownCoverMedioOrienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverMedioOrienteComponent]
    });
    fixture = TestBed.createComponent(DownCoverMedioOrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
