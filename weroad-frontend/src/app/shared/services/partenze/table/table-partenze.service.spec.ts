import { TestBed } from '@angular/core/testing';

import { TablePartenzeService } from './table-partenze.service';

describe('TablePartenzeService', () => {
  let service: TablePartenzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablePartenzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
