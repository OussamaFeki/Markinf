import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfisComponent } from './infis.component';

describe('InfisComponent', () => {
  let component: InfisComponent;
  let fixture: ComponentFixture<InfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
