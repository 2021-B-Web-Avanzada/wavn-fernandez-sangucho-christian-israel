import { TestBed } from '@angular/core/testing';

import { AereopuertosService } from './aereopuertos.service';

describe('AereopuertosService', () => {
  let service: AereopuertosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AereopuertosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
