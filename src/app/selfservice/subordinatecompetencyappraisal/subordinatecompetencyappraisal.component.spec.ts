import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinatecompetencyappraisalComponent } from './subordinatecompetencyappraisal.component';

describe('SubordinatecompetencyappraisalComponent', () => {
  let component: SubordinatecompetencyappraisalComponent;
  let fixture: ComponentFixture<SubordinatecompetencyappraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubordinatecompetencyappraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubordinatecompetencyappraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
