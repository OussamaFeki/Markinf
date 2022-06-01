import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistmanComponent } from './registman.component';

describe('RegistmanComponent', () => {
  let component: RegistmanComponent;
  let fixture: ComponentFixture<RegistmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
