import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearCuentaComponent } from './ruta-crear-cuenta.component';

describe('RutaCrearCuentaComponent', () => {
  let component: RutaCrearCuentaComponent;
  let fixture: ComponentFixture<RutaCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCrearCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
