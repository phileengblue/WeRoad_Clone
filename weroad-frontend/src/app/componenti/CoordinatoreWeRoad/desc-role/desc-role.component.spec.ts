import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescRoleComponent } from './desc-role.component';

describe('DescRoleComponent', () => {
  let component: DescRoleComponent;
  let fixture: ComponentFixture<DescRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescRoleComponent]
    });
    fixture = TestBed.createComponent(DescRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
