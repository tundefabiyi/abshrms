import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvecompetencyComponent } from './resolvecompetency.component';

describe('ResolvecompetencyComponent', () => {
  let component: ResolvecompetencyComponent;
  let fixture: ComponentFixture<ResolvecompetencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolvecompetencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvecompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
