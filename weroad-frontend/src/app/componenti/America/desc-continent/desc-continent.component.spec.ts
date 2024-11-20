import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentComponent } from './desc-continent.component';

describe('DescContinentComponent', () => {
  let component: DescContinentComponent;
  let fixture: ComponentFixture<DescContinentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentComponent]
    });
    fixture = TestBed.createComponent(DescContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
