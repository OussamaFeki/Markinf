import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofinfComponent } from './listofinf.component';

describe('ListofinfComponent', () => {
  let component: ListofinfComponent;
  let fixture: ComponentFixture<ListofinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofinfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
