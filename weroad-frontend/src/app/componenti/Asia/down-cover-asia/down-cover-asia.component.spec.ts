import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverAsiaComponent } from './down-cover-asia.component';

describe('DownCoverAsiaComponent', () => {
  let component: DownCoverAsiaComponent;
  let fixture: ComponentFixture<DownCoverAsiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverAsiaComponent]
    });
    fixture = TestBed.createComponent(DownCoverAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
