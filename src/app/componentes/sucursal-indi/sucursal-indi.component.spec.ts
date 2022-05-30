import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalIndiComponent } from './sucursal-indi.component';

describe('SucursalIndiComponent', () => {
  let component: SucursalIndiComponent;
  let fixture: ComponentFixture<SucursalIndiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalIndiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalIndiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
