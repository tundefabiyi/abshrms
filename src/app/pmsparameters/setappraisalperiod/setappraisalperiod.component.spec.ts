import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetappraisalperiodComponent } from './setappraisalperiod.component';

describe('SetappraisalperiodComponent', () => {
  let component: SetappraisalperiodComponent;
  let fixture: ComponentFixture<SetappraisalperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetappraisalperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetappraisalperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
