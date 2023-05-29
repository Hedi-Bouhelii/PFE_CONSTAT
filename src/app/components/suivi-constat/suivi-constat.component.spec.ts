import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviConstatComponent } from './suivi-constat.component';

describe('SuiviConstatComponent', () => {
  let component: SuiviConstatComponent;
  let fixture: ComponentFixture<SuiviConstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviConstatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviConstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
