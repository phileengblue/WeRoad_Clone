import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePartenzeComponent } from './table-partenze.component';

describe('TablePartenzeComponent', () => {
  let component: TablePartenzeComponent;
  let fixture: ComponentFixture<TablePartenzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePartenzeComponent]
    });
    fixture = TestBed.createComponent(TablePartenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
