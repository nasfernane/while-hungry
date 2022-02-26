import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAboutComponent } from './recipe-about.component';

describe('RecipeAboutComponent', () => {
  let component: RecipeAboutComponent;
  let fixture: ComponentFixture<RecipeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
