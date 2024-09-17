import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoComponent } from './ruta-producto.component';

describe('RutaProductoComponent', () => {
  let component: RutaProductoComponent;
  let fixture: ComponentFixture<RutaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
