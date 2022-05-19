import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubofinfComponent } from './pubofinf.component';

describe('PubofinfComponent', () => {
  let component: PubofinfComponent;
  let fixture: ComponentFixture<PubofinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubofinfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubofinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
