import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverGreciaBalcaniComponent } from './up-cover-grecia-balcani.component';

describe('UpCoverGreciaBalcaniComponent', () => {
  let component: UpCoverGreciaBalcaniComponent;
  let fixture: ComponentFixture<UpCoverGreciaBalcaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverGreciaBalcaniComponent]
    });
    fixture = TestBed.createComponent(UpCoverGreciaBalcaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
