import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesOverviewComponent } from './components/recipes/recipes-overview/recipes-overview.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', children: [
    { path: '', component: RecipesOverviewComponent },
  ] 
},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ], exports: [RouterModule]
})

export class AppRoutingModule { }
