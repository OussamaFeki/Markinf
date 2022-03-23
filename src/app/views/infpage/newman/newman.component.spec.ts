import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmanComponent } from './newman.component';

describe('NewmanComponent', () => {
  let component: NewmanComponent;
  let fixture: ComponentFixture<NewmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
