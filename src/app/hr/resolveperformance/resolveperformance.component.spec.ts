import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveperformanceComponent } from './resolveperformance.component';

describe('ResolveperformanceComponent', () => {
  let component: ResolveperformanceComponent;
  let fixture: ComponentFixture<ResolveperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
