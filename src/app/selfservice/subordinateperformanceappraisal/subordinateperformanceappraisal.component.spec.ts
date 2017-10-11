import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinateperformanceappraisalComponent } from './subordinateperformanceappraisal.component';

describe('SubordinateperformanceappraisalComponent', () => {
  let component: SubordinateperformanceappraisalComponent;
  let fixture: ComponentFixture<SubordinateperformanceappraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubordinateperformanceappraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubordinateperformanceappraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
