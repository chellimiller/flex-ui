import { TestBed } from '@angular/core/testing';

import { FlexUiService } from './flex-ui.service';

describe('FlexUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlexUiService = TestBed.get(FlexUiService);
    expect(service).toBeTruthy();
  });
});
