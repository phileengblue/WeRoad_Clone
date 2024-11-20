import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverMedioOrienteComponent } from './up-cover-medio-oriente.component';

describe('UpCoverMedioOrienteComponent', () => {
  let component: UpCoverMedioOrienteComponent;
  let fixture: ComponentFixture<UpCoverMedioOrienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverMedioOrienteComponent]
    });
    fixture = TestBed.createComponent(UpCoverMedioOrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
