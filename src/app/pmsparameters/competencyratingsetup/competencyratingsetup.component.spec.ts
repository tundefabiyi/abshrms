import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyratingsetupComponent } from './competencyratingsetup.component';

describe('CompetencyratingsetupComponent', () => {
  let component: CompetencyratingsetupComponent;
  let fixture: ComponentFixture<CompetencyratingsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyratingsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyratingsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
