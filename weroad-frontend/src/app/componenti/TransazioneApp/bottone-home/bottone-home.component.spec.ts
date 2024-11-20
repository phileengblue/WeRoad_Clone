import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottoneHomeComponent } from './bottone-home.component';

describe('BottoneHomeComponent', () => {
  let component: BottoneHomeComponent;
  let fixture: ComponentFixture<BottoneHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottoneHomeComponent]
    });
    fixture = TestBed.createComponent(BottoneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
