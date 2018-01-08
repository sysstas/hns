import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersToDoComponent } from './orders-to-do.component';

describe('OrdersToDoComponent', () => {
  let component: OrdersToDoComponent;
  let fixture: ComponentFixture<OrdersToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
