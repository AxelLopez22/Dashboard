import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsRevisadosComponent } from './tickets-revisados.component';

describe('TicketsRevisadosComponent', () => {
  let component: TicketsRevisadosComponent;
  let fixture: ComponentFixture<TicketsRevisadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsRevisadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsRevisadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
