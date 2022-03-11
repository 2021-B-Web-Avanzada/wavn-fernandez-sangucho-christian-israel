import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AereopuertoFormComponent } from './aereopuerto-form.component';

describe('AereopuertoFormComponent', () => {
  let component: AereopuertoFormComponent;
  let fixture: ComponentFixture<AereopuertoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AereopuertoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AereopuertoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
