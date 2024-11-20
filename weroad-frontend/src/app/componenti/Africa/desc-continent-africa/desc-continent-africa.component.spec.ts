import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContinentAfricaComponent } from './desc-continent-africa.component';

describe('DescContinentAfricaComponent', () => {
  let component: DescContinentAfricaComponent;
  let fixture: ComponentFixture<DescContinentAfricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescContinentAfricaComponent]
    });
    fixture = TestBed.createComponent(DescContinentAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
