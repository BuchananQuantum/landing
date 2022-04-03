import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionDeliveryComponent } from './connection-delivery.component';

describe('ConnectionDeliveryComponent', () => {
  let component: ConnectionDeliveryComponent;
  let fixture: ComponentFixture<ConnectionDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
