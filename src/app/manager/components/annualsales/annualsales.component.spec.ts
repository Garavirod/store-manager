import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualsalesComponent } from './annualsales.component';

describe('AnnualsalesComponent', () => {
  let component: AnnualsalesComponent;
  let fixture: ComponentFixture<AnnualsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
