import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCoverSpagnaPortogalloComponent } from './up-cover-spagna-portogallo.component';

describe('UpCoverSpagnaPortogalloComponent', () => {
  let component: UpCoverSpagnaPortogalloComponent;
  let fixture: ComponentFixture<UpCoverSpagnaPortogalloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpCoverSpagnaPortogalloComponent]
    });
    fixture = TestBed.createComponent(UpCoverSpagnaPortogalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
