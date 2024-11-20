import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentSpagnaPortogalloComponent } from './desc-continent-spagna-portogallo.component';

describe('DescContinentSpagnaPortogalloComponent', () => {
  let component: DescContinentSpagnaPortogalloComponent;
  let fixture: ComponentFixture<DescContinentSpagnaPortogalloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentSpagnaPortogalloComponent]
    });
    fixture = TestBed.createComponent(DescContinentSpagnaPortogalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
