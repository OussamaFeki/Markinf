import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigaccountComponent } from './configaccount.component';

describe('ConfigaccountComponent', () => {
  let component: ConfigaccountComponent;
  let fixture: ComponentFixture<ConfigaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
