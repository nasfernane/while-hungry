import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipePreviewIngredientsComponent } from './new-recipe-preview-ingredients.component';

describe('NewRecipePreviewIngredientsComponent', () => {
  let component: NewRecipePreviewIngredientsComponent;
  let fixture: ComponentFixture<NewRecipePreviewIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecipePreviewIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipePreviewIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
