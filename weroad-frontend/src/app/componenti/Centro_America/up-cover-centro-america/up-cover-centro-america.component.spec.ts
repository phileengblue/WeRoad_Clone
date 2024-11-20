import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverCentroAmericaComponent } from './up-cover-centro-america.component';

describe('UpCoverCentroAmericaComponent', () => {
  let component: UpCoverCentroAmericaComponent;
  let fixture: ComponentFixture<UpCoverCentroAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverCentroAmericaComponent]
    });
    fixture = TestBed.createComponent(UpCoverCentroAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
