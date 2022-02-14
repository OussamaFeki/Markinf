import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinpageComponent } from './ninpage.component';

describe('NinpageComponent', () => {
  let component: NinpageComponent;
  let fixture: ComponentFixture<NinpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
