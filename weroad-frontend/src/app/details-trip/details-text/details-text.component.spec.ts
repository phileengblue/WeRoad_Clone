import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTextComponent } from './details-text.component';

describe('DetailsTextComponent', () => {
  let component: DetailsTextComponent;
  let fixture: ComponentFixture<DetailsTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTextComponent]
    });
    fixture = TestBed.createComponent(DetailsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
