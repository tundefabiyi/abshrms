import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetgoalsComponent } from './setgoals.component';

describe('SetgoalsComponent', () => {
  let component: SetgoalsComponent;
  let fixture: ComponentFixture<SetgoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetgoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
