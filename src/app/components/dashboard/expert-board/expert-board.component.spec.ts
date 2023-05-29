import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertBoardComponent } from './expert-board.component';

describe('ExpertBoardComponent', () => {
  let component: ExpertBoardComponent;
  let fixture: ComponentFixture<ExpertBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
