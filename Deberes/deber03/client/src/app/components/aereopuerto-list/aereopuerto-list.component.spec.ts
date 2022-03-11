import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AereopuertoListComponent } from './aereopuerto-list.component';

describe('AereopuertoListComponent', () => {
  let component: AereopuertoListComponent;
  let fixture: ComponentFixture<AereopuertoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AereopuertoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AereopuertoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
