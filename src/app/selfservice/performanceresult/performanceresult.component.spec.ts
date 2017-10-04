import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceresultComponent } from './performanceresult.component';

describe('PerformanceresultComponent', () => {
  let component: PerformanceresultComponent;
  let fixture: ComponentFixture<PerformanceresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
