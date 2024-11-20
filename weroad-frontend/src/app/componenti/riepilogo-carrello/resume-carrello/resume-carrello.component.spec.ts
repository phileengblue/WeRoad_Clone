import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCarrelloComponent } from './resume-carrello.component';

describe('ResumeCarrelloComponent', () => {
  let component: ResumeCarrelloComponent;
  let fixture: ComponentFixture<ResumeCarrelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeCarrelloComponent]
    });
    fixture = TestBed.createComponent(ResumeCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
