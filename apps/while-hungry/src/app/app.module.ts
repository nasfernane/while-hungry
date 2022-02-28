// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

// dependancies modules
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';

// wh libs & modules
import { MaterialModule } from '@wh/material';
import { CoreDataModule } from '@wh/core-data';
import { CoreStateModule } from '@wh/core-state';

// wh components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesOverviewComponent } from './components/recipes/recipes-overview/recipes-overview.component';
import { RecipesOverviewItemComponent } from './components/recipes/recipes-overview/recipes-overview-item/recipes-overview-item.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogNewPostComponent } from './components/blog/blog-new-post/blog-new-post.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RecipeIngredientsComponent } from './components/recipes/recipe/recipe-ingredients/recipe-ingredients.component';
import { RecipeAuthorComponent } from './components/recipes/recipe/recipe-author/recipe-author.component';
import { RecipeIngredientsOptionsComponent } from './components/recipes/recipe/recipe-ingredients/recipe-ingredients-options/recipe-ingredients-options.component';
import { RecipeRatingComponent } from './components/recipes/recipe/recipe-rating/recipe-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    RecipesOverviewComponent, 
    RecipesOverviewItemComponent, 
    HeaderComponent, 
    HeaderLogoComponent, 
    HeaderNavComponent, 
    BlogComponent, 
    BlogNewPostComponent, 
    BlogPostComponent, 
    RecipeComponent, 
    BreadcrumbComponent, 
    RecipeIngredientsComponent, 
    RecipeAuthorComponent, RecipeIngredientsOptionsComponent, RecipeRatingComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    StoreModule.forRoot({}, {}), 
    AppRoutingModule, 
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    RouterModule,
  ],
    
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline', floatLabel: 'auto'}},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
  ) {}
}
