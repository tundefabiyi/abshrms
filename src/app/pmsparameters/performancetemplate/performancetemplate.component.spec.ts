import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancetemplateComponent } from './performancetemplate.component';

describe('PerformancetemplateComponent', () => {
  let component: PerformancetemplateComponent;
  let fixture: ComponentFixture<PerformancetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
