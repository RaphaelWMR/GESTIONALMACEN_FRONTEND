import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarArticuloPedidoComponent } from './actualizar-articulo-pedido.component';

describe('ActualizarArticuloPedidoComponent', () => {
  let component: ActualizarArticuloPedidoComponent;
  let fixture: ComponentFixture<ActualizarArticuloPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarArticuloPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarArticuloPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
