import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierConstatComponent } from './verifier-constat.component';

describe('VerifierConstatComponent', () => {
  let component: VerifierConstatComponent;
  let fixture: ComponentFixture<VerifierConstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifierConstatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifierConstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
