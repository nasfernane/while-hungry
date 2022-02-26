import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientsOptionsComponent } from './recipe-ingredients-options.component';

describe('RecipeIngredientsOptionsComponent', () => {
  let component: RecipeIngredientsOptionsComponent;
  let fixture: ComponentFixture<RecipeIngredientsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIngredientsOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
