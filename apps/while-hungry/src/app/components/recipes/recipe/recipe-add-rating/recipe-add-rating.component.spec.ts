import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddRatingComponent } from './recipe-add-rating.component';

describe('RecipeAddRatingComponent', () => {
  let component: RecipeAddRatingComponent;
  let fixture: ComponentFixture<RecipeAddRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAddRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
