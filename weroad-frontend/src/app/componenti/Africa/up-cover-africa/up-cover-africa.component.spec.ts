import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverAfricaComponent } from './up-cover-africa.component';

describe('UpCoverAfricaComponent', () => {
  let component: UpCoverAfricaComponent;
  let fixture: ComponentFixture<UpCoverAfricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverAfricaComponent]
    });
    fixture = TestBed.createComponent(UpCoverAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
