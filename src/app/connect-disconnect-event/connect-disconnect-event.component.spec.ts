import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDisconnectEventComponent } from './connect-disconnect-event.component';

describe('ConnectDisconnectEventComponent', () => {
  let component: ConnectDisconnectEventComponent;
  let fixture: ComponentFixture<ConnectDisconnectEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectDisconnectEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectDisconnectEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
