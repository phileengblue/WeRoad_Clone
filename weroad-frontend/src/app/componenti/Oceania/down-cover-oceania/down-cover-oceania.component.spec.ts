import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverOceaniaComponent } from './down-cover-oceania.component';

describe('DownCoverOceaniaComponent', () => {
  let component: DownCoverOceaniaComponent;
  let fixture: ComponentFixture<DownCoverOceaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverOceaniaComponent]
    });
    fixture = TestBed.createComponent(DownCoverOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
