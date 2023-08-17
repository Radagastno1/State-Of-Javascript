import { TestBed } from '@angular/core/testing';

import { FrameworkManagerService } from './framework-manager.service';

describe('FrameworkManagerService', () => {
  let service: FrameworkManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworkManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
