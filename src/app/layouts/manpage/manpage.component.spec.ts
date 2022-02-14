import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpageComponent } from './manpage.component';

describe('ManpageComponent', () => {
  let component: ManpageComponent;
  let fixture: ComponentFixture<ManpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
