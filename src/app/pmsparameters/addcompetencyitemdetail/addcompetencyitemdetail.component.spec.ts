import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompetencyitemdetailComponent } from './addcompetencyitemdetail.component';

describe('AddcompetencyitemdetailComponent', () => {
  let component: AddcompetencyitemdetailComponent;
  let fixture: ComponentFixture<AddcompetencyitemdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompetencyitemdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompetencyitemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
