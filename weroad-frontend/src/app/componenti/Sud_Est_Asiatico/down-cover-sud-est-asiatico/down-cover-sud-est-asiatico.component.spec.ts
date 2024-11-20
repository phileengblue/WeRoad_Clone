import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverSudEstAsiaticoComponent } from './down-cover-sud-est-asiatico.component';

describe('DownCoverSudEstAsiaticoComponent', () => {
  let component: DownCoverSudEstAsiaticoComponent;
  let fixture: ComponentFixture<DownCoverSudEstAsiaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverSudEstAsiaticoComponent]
    });
    fixture = TestBed.createComponent(DownCoverSudEstAsiaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
