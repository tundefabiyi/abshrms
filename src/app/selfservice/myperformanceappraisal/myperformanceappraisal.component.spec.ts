import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyperformanceappraisalComponent } from './myperformanceappraisal.component';

describe('MyperformanceappraisalComponent', () => {
  let component: MyperformanceappraisalComponent;
  let fixture: ComponentFixture<MyperformanceappraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyperformanceappraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyperformanceappraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
