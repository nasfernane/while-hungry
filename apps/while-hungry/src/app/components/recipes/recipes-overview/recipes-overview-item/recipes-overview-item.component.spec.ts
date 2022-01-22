import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesOverviewItemComponent } from './recipes-overview-item.component';

describe('RecipesOverviewItemComponent', () => {
  let component: RecipesOverviewItemComponent;
  let fixture: ComponentFixture<RecipesOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesOverviewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
