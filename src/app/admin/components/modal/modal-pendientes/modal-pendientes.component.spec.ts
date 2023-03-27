import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPendientesComponent } from './modal-pendientes.component';

describe('ModalPendientesComponent', () => {
  let component: ModalPendientesComponent;
  let fixture: ComponentFixture<ModalPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
