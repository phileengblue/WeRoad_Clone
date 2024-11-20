import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPartenzeComponent } from './hero-partenze.component';

describe('HeroPartenzeComponent', () => {
  let component: HeroPartenzeComponent;
  let fixture: ComponentFixture<HeroPartenzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroPartenzeComponent]
    });
    fixture = TestBed.createComponent(HeroPartenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
