import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocyklComponent } from './motocykl.component';

describe('MotocyklComponent', () => {
  let component: MotocyklComponent;
  let fixture: ComponentFixture<MotocyklComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotocyklComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotocyklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
