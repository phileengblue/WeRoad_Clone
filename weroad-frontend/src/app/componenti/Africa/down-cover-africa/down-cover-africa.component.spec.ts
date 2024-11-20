import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCoverAfricaComponent } from './down-cover-africa.component';

describe('DownCoverAfricaComponent', () => {
  let component: DownCoverAfricaComponent;
  let fixture: ComponentFixture<DownCoverAfricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownCoverAfricaComponent]
    });
    fixture = TestBed.createComponent(DownCoverAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
