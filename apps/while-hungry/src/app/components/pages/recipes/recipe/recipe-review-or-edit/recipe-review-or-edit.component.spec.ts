import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeReviewOrEditComponent } from './recipe-review-or-edit.component';

describe('RecipeReviewOrEditComponent', () => {
  let component: RecipeReviewOrEditComponent;
  let fixture: ComponentFixture<RecipeReviewOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeReviewOrEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeReviewOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
