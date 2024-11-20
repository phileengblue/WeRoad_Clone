import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTextRingraziamentiComponent } from './button-text-ringraziamenti.component';

describe('ButtonTextRingraziamentiComponent', () => {
  let component: ButtonTextRingraziamentiComponent;
  let fixture: ComponentFixture<ButtonTextRingraziamentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTextRingraziamentiComponent]
    });
    fixture = TestBed.createComponent(ButtonTextRingraziamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
