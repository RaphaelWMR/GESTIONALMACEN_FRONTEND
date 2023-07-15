import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlmacenistaComponent } from './menu-almacenista.component';

describe('MenuAlmacenistaComponent', () => {
  let component: MenuAlmacenistaComponent;
  let fixture: ComponentFixture<MenuAlmacenistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAlmacenistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAlmacenistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
