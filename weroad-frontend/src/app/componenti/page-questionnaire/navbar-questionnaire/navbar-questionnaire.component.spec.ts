import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarQuestionnaireComponent } from './navbar-questionnaire.component';

describe('NavbarQuestionnaireComponent', () => {
  let component: NavbarQuestionnaireComponent;
  let fixture: ComponentFixture<NavbarQuestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarQuestionnaireComponent]
    });
    fixture = TestBed.createComponent(NavbarQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
