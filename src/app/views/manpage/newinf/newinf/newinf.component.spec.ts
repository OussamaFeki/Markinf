import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinfComponent } from './newinf.component';

describe('NewinfComponent', () => {
  let component: NewinfComponent;
  let fixture: ComponentFixture<NewinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewinfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
