import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToExpertComponent } from './send-to-expert.component';

describe('SendToExpertComponent', () => {
  let component: SendToExpertComponent;
  let fixture: ComponentFixture<SendToExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendToExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
