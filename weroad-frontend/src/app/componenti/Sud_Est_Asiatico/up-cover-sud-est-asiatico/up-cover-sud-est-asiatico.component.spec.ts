import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverSudEstAsiaticoComponent } from './up-cover-sud-est-asiatico.component';

describe('UpCoverSudEstAsiaticoComponent', () => {
  let component: UpCoverSudEstAsiaticoComponent;
  let fixture: ComponentFixture<UpCoverSudEstAsiaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverSudEstAsiaticoComponent]
    });
    fixture = TestBed.createComponent(UpCoverSudEstAsiaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
