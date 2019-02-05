import { TestBed } from '@angular/core/testing';

import { StarredConfigService } from './starred-config.service';

describe('StarredConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarredConfigService = TestBed.get(StarredConfigService);
    expect(service).toBeTruthy();
  });
});
