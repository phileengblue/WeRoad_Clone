import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverComponent } from './up-cover.component';

describe('UpCoverComponent', () => {
  let component: UpCoverComponent;
  let fixture: ComponentFixture<UpCoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverComponent]
    });
    fixture = TestBed.createComponent(UpCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
