import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoraComponent } from './encora.component';

describe('EncoraComponent', () => {
  let component: EncoraComponent;
  let fixture: ComponentFixture<EncoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
