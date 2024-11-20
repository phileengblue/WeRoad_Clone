import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentAsiaComponent } from './desc-continent-asia.component';

describe('DescContinentAsiaComponent', () => {
  let component: DescContinentAsiaComponent;
  let fixture: ComponentFixture<DescContinentAsiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentAsiaComponent]
    });
    fixture = TestBed.createComponent(DescContinentAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
