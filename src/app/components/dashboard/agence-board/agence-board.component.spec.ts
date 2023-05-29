import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceBoardComponent } from './agence-board.component';

describe('AgenceBoardComponent', () => {
  let component: AgenceBoardComponent;
  let fixture: ComponentFixture<AgenceBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
