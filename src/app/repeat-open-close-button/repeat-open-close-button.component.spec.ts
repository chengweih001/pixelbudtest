import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatOpenCloseButtonComponent } from './repeat-open-close-button.component';

describe('RepeatOpenCloseButtonComponent', () => {
  let component: RepeatOpenCloseButtonComponent;
  let fixture: ComponentFixture<RepeatOpenCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatOpenCloseButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepeatOpenCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
