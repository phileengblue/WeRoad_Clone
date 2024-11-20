import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCandidatureComponent } from './desc-candidature.component';

describe('DescCandidatureComponent', () => {
  let component: DescCandidatureComponent;
  let fixture: ComponentFixture<DescCandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescCandidatureComponent]
    });
    fixture = TestBed.createComponent(DescCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
