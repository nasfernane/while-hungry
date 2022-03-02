import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddCommentComponent } from './recipe-add-comment.component';

describe('RecipeAddCommentComponent', () => {
  let component: RecipeAddCommentComponent;
  let fixture: ComponentFixture<RecipeAddCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAddCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
