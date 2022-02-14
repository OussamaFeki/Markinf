import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfsComponent } from './infs.component';

describe('InfsComponent', () => {
  let component: InfsComponent;
  let fixture: ComponentFixture<InfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
