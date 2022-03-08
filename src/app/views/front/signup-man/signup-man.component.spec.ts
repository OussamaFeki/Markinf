import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupManComponent } from './signup-man.component';

describe('SignupManComponent', () => {
  let component: SignupManComponent;
  let fixture: ComponentFixture<SignupManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
