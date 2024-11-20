import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirizzoFatturazioneComponent } from './indirizzo-fatturazione.component';

describe('IndirizzoFatturazioneComponent', () => {
  let component: IndirizzoFatturazioneComponent;
  let fixture: ComponentFixture<IndirizzoFatturazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndirizzoFatturazioneComponent]
    });
    fixture = TestBed.createComponent(IndirizzoFatturazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
