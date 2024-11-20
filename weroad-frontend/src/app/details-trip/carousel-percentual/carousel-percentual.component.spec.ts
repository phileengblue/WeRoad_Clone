import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPercentualComponent } from './carousel-percentual.component';

describe('CarouselPercentualComponent', () => {
  let component: CarouselPercentualComponent;
  let fixture: ComponentFixture<CarouselPercentualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselPercentualComponent]
    });
    fixture = TestBed.createComponent(CarouselPercentualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
