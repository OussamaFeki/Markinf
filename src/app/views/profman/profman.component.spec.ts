import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfmanComponent } from './profman.component';

describe('ProfmanComponent', () => {
  let component: ProfmanComponent;
  let fixture: ComponentFixture<ProfmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
