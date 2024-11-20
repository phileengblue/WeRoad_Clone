import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiMiddleEastComponent } from './viaggi-middle-east.component';

describe('ViaggiMiddleEastComponent', () => {
  let component: ViaggiMiddleEastComponent;
  let fixture: ComponentFixture<ViaggiMiddleEastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViaggiMiddleEastComponent]
    });
    fixture = TestBed.createComponent(ViaggiMiddleEastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
