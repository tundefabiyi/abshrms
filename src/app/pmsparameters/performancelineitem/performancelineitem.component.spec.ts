import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancelineitemComponent } from './performancelineitem.component';

describe('PerformancelineitemComponent', () => {
  let component: PerformancelineitemComponent;
  let fixture: ComponentFixture<PerformancelineitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancelineitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancelineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
