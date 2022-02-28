import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranonComponent } from './cranon.component';

describe('CranonComponent', () => {
  let component: CranonComponent;
  let fixture: ComponentFixture<CranonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CranonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CranonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
