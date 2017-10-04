import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompetencyappraisalComponent } from './mycompetencyappraisal.component';

describe('MycompetencyappraisalComponent', () => {
  let component: MycompetencyappraisalComponent;
  let fixture: ComponentFixture<MycompetencyappraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycompetencyappraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycompetencyappraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
