import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverSudAmericaComponent } from './down-cover-sud-america.component';

describe('DownCoverSudAmericaComponent', () => {
  let component: DownCoverSudAmericaComponent;
  let fixture: ComponentFixture<DownCoverSudAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverSudAmericaComponent]
    });
    fixture = TestBed.createComponent(DownCoverSudAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
