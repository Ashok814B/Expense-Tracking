import { TestBed } from '@angular/core/testing';

import { RoutingGuradService } from './routing-gurad.service';

describe('RoutingGuradService', () => {
  let service: RoutingGuradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingGuradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
