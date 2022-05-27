import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { RecipesOverviewComponent } from './components/pages/recipes/recipes-overview/recipes-overview.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogNewPostComponent } from './components/pages/blog/blog-new-post/blog-new-post.component';
import { BlogPostComponent } from './components/pages/blog/blog-post/blog-post.component';
import { RecipeComponent } from './components/pages/recipes/recipe/recipe.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { GlossaryComponent } from './components/pages/glossary/glossary.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { ShoppinglistComponent } from './components/pages/shoppinglist/shoppinglist.component';
import { NewRecipeComponent } from './components/pages/recipes/new-recipe/new-recipe.component';
import { TermsServiceComponent } from './components/pages/terms-service/terms-service.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';

// guards
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'recipes',
    children: [
      { path: '', component: RecipesOverviewComponent },
      { path: 'add', component: NewRecipeComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeComponent },
    ],
  },
  {
    path: 'blog',
    children: [
      { path: '', component: BlogComponent },
      {
        path: 'post/new',
        component: BlogNewPostComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      { path: 'post/:id', component: BlogPostComponent },
    ],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'shopping', component: ShoppinglistComponent },
  { path: 'terms-service', component: TermsServiceComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
