import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodComponen } from './addprod.component';

describe('AddprodComponent', () => {
  let component: AddprodComponen;
  let fixture: ComponentFixture<AddprodComponen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodComponen ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
