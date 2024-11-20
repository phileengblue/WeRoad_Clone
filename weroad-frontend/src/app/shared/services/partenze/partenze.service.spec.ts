import { TestBed } from '@angular/core/testing';

import { PartenzeService } from './partenze.service';

describe('PartenzeService', () => {
  let service: PartenzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartenzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
