import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverComponent } from './down-cover.component';

describe('DownCoverComponent', () => {
  let component: DownCoverComponent;
  let fixture: ComponentFixture<DownCoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverComponent]
    });
    fixture = TestBed.createComponent(DownCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
