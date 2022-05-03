import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesOverviewFiltersComponent } from './recipes-overview-filters.component';

describe('RecipesOverviewFiltersComponent', () => {
  let component: RecipesOverviewFiltersComponent;
  let fixture: ComponentFixture<RecipesOverviewFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesOverviewFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesOverviewFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
