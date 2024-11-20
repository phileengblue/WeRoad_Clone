import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRecensioniComponent } from './component-recensioni.component';

describe('ComponentRecensioniComponent', () => {
  let component: ComponentRecensioniComponent;
  let fixture: ComponentFixture<ComponentRecensioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentRecensioniComponent]
    });
    fixture = TestBed.createComponent(ComponentRecensioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
