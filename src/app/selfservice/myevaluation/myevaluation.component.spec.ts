import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyevaluationComponent } from './myevaluation.component';

describe('MyevaluationComponent', () => {
  let component: MyevaluationComponent;
  let fixture: ComponentFixture<MyevaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyevaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
