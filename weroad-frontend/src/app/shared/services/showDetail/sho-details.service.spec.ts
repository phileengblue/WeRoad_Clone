import { TestBed } from '@angular/core/testing';

import { ShoDetailsService } from './sho-details.service';

describe('ShoDetailsService', () => {
  let service: ShoDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
