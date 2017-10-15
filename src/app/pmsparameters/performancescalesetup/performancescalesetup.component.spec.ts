import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancescalesetupComponent } from './performancescalesetup.component';

describe('PerformancescalesetupComponent', () => {
  let component: PerformancescalesetupComponent;
  let fixture: ComponentFixture<PerformancescalesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancescalesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancescalesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
