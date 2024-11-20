import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInterviewBootcampComponent } from './group-interview-bootcamp.component';

describe('GroupInterviewBootcampComponent', () => {
  let component: GroupInterviewBootcampComponent;
  let fixture: ComponentFixture<GroupInterviewBootcampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupInterviewBootcampComponent]
    });
    fixture = TestBed.createComponent(GroupInterviewBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
