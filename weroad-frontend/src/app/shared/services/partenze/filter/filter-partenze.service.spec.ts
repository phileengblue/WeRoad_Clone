import { TestBed } from '@angular/core/testing';

import { FilterPartenzeService } from './filter-partenze.service';

describe('FilterPartenzeService', () => {
  let service: FilterPartenzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPartenzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
