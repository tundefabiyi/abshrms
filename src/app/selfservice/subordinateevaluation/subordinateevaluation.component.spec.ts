import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinateevaluationComponent } from './subordinateevaluation.component';

describe('SubordinateevaluationComponent', () => {
  let component: SubordinateevaluationComponent;
  let fixture: ComponentFixture<SubordinateevaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubordinateevaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubordinateevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
