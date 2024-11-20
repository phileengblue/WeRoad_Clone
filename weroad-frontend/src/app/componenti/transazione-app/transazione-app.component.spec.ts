import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneAppComponent } from './transazione-app.component';

describe('TransazioneAppComponent', () => {
  let component: TransazioneAppComponent;
  let fixture: ComponentFixture<TransazioneAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransazioneAppComponent]
    });
    fixture = TestBed.createComponent(TransazioneAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
