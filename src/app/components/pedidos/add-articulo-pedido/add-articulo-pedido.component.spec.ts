import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticuloPedidoComponent } from './add-articulo-pedido.component';

describe('AddArticuloPedidoComponent', () => {
  let component: AddArticuloPedidoComponent;
  let fixture: ComponentFixture<AddArticuloPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticuloPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticuloPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
