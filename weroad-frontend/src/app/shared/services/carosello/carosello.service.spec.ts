import { TestBed } from '@angular/core/testing';

import { CaroselloService } from './carosello.service';

describe('CaroselloService', () => {
  let service: CaroselloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaroselloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
