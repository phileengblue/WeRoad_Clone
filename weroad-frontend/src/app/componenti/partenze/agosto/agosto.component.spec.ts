import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgostoComponent } from './agosto.component';

describe('AgostoComponent', () => {
  let component: AgostoComponent;
  let fixture: ComponentFixture<AgostoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgostoComponent]
    });
    fixture = TestBed.createComponent(AgostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
