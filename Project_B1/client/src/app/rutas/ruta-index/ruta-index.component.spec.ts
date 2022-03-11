import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaIndexComponent } from './ruta-index.component';

describe('RutaIndexComponent', () => {
  let component: RutaIndexComponent;
  let fixture: ComponentFixture<RutaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
