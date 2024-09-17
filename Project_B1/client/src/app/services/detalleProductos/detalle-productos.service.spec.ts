import { TestBed } from '@angular/core/testing';

import { DetalleProductosService } from './detalle-productos.service';

describe('DetalleProductosService', () => {
  let service: DetalleProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
