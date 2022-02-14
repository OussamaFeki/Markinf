import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesslistComponent } from './messlist.component';

describe('MesslistComponent', () => {
  let component: MesslistComponent;
  let fixture: ComponentFixture<MesslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
