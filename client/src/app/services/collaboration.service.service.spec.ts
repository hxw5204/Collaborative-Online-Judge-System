import { TestBed } from '@angular/core/testing';

import { Collaboration.ServiceService } from './collaboration.service.service';

describe('Collaboration.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Collaboration.ServiceService = TestBed.get(Collaboration.ServiceService);
    expect(service).toBeTruthy();
  });
});
