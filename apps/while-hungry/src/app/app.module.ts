// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// dependancies modules
import { StoreModule } from '@ngrx/store';

// wh libs & modumes
import { MaterialModule } from '@wh/material';
import { CoreDataModule } from '@wh/core-data';
import { CoreStateModule } from '@wh/core-state';
import { AppRoutingModule } from './app-routing.module';

// wh components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesOverviewComponent } from './components/recipes/recipes-overview/recipes-overview.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RecipesOverviewComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    StoreModule.forRoot({}, {}), 
    AppRoutingModule, 
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
  ],
    
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
