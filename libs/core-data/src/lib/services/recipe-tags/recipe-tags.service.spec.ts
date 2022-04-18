import { TestBed } from '@angular/core/testing';

import { RecipeTagsService } from './recipe-tags.service';

describe('RecipeTagsService', () => {
  let service: RecipeTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
