import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCandidatureExpressComponent } from './desc-candidature-express.component';

describe('DescCandidatureExpressComponent', () => {
  let component: DescCandidatureExpressComponent;
  let fixture: ComponentFixture<DescCandidatureExpressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescCandidatureExpressComponent]
    });
    fixture = TestBed.createComponent(DescCandidatureExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
