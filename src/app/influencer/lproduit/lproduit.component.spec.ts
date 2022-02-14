import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LproduitComponent } from './lproduit.component';

describe('LproduitComponent', () => {
  let component: LproduitComponent;
  let fixture: ComponentFixture<LproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
