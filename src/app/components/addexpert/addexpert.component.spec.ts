import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpertComponent } from './addexpert.component';

describe('AddexpertComponent', () => {
  let component: AddexpertComponent;
  let fixture: ComponentFixture<AddexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
