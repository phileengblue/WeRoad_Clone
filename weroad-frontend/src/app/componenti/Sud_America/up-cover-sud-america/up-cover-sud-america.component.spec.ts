import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverSudAmericaComponent } from './up-cover-sud-america.component';

describe('UpCoverSudAmericaComponent', () => {
  let component: UpCoverSudAmericaComponent;
  let fixture: ComponentFixture<UpCoverSudAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverSudAmericaComponent]
    });
    fixture = TestBed.createComponent(UpCoverSudAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
