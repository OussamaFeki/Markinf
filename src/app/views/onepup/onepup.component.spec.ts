import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepupComponent } from './onepup.component';

describe('OnepupComponent', () => {
  let component: OnepupComponent;
  let fixture: ComponentFixture<OnepupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnepupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
