import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UberBootyMessengerComponent } from './uberbooty-messenger.component';

describe('uberbooty-messengerComponent', () => {
  let component: UberBootyMessengerComponent;
  let fixture: ComponentFixture<UberBootyMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UberBootyMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UberBootyMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
