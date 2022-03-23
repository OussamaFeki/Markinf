import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfinfComponent } from './profinf.component';

describe('ProfinfComponent', () => {
  let component: ProfinfComponent;
  let fixture: ComponentFixture<ProfinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfinfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
