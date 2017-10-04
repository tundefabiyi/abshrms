import { TestBed, inject } from '@angular/core/testing';

import { CompetencymeasurementService } from './competencymeasurement.service';

describe('CompetencymeasurementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetencymeasurementService]
    });
  });

  it('should be created', inject([CompetencymeasurementService], (service: CompetencymeasurementService) => {
    expect(service).toBeTruthy();
  }));
});
