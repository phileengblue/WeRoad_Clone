import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverOceaniaComponent } from './up-cover-oceania.component';

describe('UpCoverOceaniaComponent', () => {
  let component: UpCoverOceaniaComponent;
  let fixture: ComponentFixture<UpCoverOceaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverOceaniaComponent]
    });
    fixture = TestBed.createComponent(UpCoverOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
