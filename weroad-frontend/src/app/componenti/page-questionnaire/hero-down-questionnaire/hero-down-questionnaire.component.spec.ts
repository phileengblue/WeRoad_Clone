import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDownQuestionnaireComponent } from './hero-down-questionnaire.component';

describe('HeroDownQuestionnaireComponent', () => {
  let component: HeroDownQuestionnaireComponent;
  let fixture: ComponentFixture<HeroDownQuestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDownQuestionnaireComponent]
    });
    fixture = TestBed.createComponent(HeroDownQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
