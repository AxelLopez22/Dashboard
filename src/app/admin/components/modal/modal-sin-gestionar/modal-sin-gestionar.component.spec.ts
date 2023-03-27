import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSinGestionarComponent } from './modal-sin-gestionar.component';

describe('ModalSinGestionarComponent', () => {
  let component: ModalSinGestionarComponent;
  let fixture: ComponentFixture<ModalSinGestionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSinGestionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSinGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
