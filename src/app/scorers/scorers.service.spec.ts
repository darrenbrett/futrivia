import { TestBed } from '@angular/core/testing';

import { ScorersService } from './scorers.service';

describe('ScorersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScorersService = TestBed.get(ScorersService);
    expect(service).toBeTruthy();
  });
});
