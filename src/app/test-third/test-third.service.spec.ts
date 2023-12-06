import { TestBed } from '@angular/core/testing';

import { TestThirdService } from './test-third.service';

describe('TestThirdService', () => {
  let service: TestThirdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestThirdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
