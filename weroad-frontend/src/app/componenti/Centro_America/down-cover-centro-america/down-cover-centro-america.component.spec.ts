import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverCentroAmericaComponent } from './down-cover-centro-america.component';

describe('DownCoverCentroAmericaComponent', () => {
  let component: DownCoverCentroAmericaComponent;
  let fixture: ComponentFixture<DownCoverCentroAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverCentroAmericaComponent]
    });
    fixture = TestBed.createComponent(DownCoverCentroAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
