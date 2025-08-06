import { TestBed } from '@angular/core/testing';

import { InteriodesignService } from './interiodesign.service';

describe('InteriodesignService', () => {
  let service: InteriodesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteriodesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
