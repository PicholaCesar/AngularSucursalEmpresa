import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuvarComponent } from './menuvar.component';

describe('MenuvarComponent', () => {
  let component: MenuvarComponent;
  let fixture: ComponentFixture<MenuvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuvarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
