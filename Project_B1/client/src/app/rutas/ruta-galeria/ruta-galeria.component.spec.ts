import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGaleriaComponent } from './ruta-galeria.component';

describe('RutaGaleriaComponent', () => {
  let component: RutaGaleriaComponent;
  let fixture: ComponentFixture<RutaGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
