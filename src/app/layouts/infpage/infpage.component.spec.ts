import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfpageComponent } from './infpage.component';

describe('InfpageComponent', () => {
  let component: InfpageComponent;
  let fixture: ComponentFixture<InfpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
