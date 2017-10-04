import { TestBed, inject } from '@angular/core/testing';

import { SelfserviceService } from './selfservice.service';

describe('SelfserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelfserviceService]
    });
  });

  it('should be created', inject([SelfserviceService], (service: SelfserviceService) => {
    expect(service).toBeTruthy();
  }));
});
