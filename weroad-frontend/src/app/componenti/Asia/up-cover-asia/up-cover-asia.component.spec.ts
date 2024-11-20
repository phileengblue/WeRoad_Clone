import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverAsiaComponent } from './up-cover-asia.component';

describe('UpCoverAsiaComponent', () => {
  let component: UpCoverAsiaComponent;
  let fixture: ComponentFixture<UpCoverAsiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverAsiaComponent]
    });
    fixture = TestBed.createComponent(UpCoverAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
