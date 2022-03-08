import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneprodComponent } from './oneprod.component';

describe('OneprodComponent', () => {
  let component: OneprodComponent;
  let fixture: ComponentFixture<OneprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
