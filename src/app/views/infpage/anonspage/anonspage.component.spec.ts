import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonspageComponent } from './anonspage.component';

describe('AnonspageComponent', () => {
  let component: AnonspageComponent;
  let fixture: ComponentFixture<AnonspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
