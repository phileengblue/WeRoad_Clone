import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverFranciaBelgioPaesiBassiComponent } from './up-cover-francia-belgio-paesi-bassi.component';

describe('UpCoverFranciaBelgioPaesiBassiComponent', () => {
  let component: UpCoverFranciaBelgioPaesiBassiComponent;
  let fixture: ComponentFixture<UpCoverFranciaBelgioPaesiBassiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverFranciaBelgioPaesiBassiComponent]
    });
    fixture = TestBed.createComponent(UpCoverFranciaBelgioPaesiBassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
