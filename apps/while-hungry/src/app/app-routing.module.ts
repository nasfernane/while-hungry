import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesOverviewComponent } from './components/recipes/recipes-overview/recipes-overview.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogNewPostComponent } from './components/blog/blog-new-post/blog-new-post.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recipes', children: [
      { path: '', component: RecipesOverviewComponent },
    ] 
  },
  { path: 'blog', children: [
    { path: '', component: BlogComponent },
    { path: 'post/new', component: BlogNewPostComponent }, 
    // { path: 'post/new', component: BlogNewPostComponent, canActivate: [AuthGuard, AdminGuard] }, 
    { path: 'post/:id', component: BlogPostComponent }
  ] 
},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, { enableTracing: true })
  ], exports: [RouterModule]
})

export class AppRoutingModule { }
