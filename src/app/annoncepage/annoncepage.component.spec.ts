import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncepageComponent } from './annoncepage.component';

describe('AnnoncepageComponent', () => {
  let component: AnnoncepageComponent;
  let fixture: ComponentFixture<AnnoncepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
