import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManofinfComponent } from './manofinf.component';

describe('ManofinfComponent', () => {
  let component: ManofinfComponent;
  let fixture: ComponentFixture<ManofinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManofinfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManofinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
