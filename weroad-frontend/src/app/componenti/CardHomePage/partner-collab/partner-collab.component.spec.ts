import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerCollabComponent } from './partner-collab.component';

describe('PartnerCollabComponent', () => {
  let component: PartnerCollabComponent;
  let fixture: ComponentFixture<PartnerCollabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerCollabComponent]
    });
    fixture = TestBed.createComponent(PartnerCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
