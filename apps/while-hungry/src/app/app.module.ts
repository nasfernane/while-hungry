// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// dependancies modules
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';

// wh libs & modumes
import { MaterialModule } from '@wh/material';
import { CoreDataModule } from '@wh/core-data';
import { CoreStateModule } from '@wh/core-state';
import { AppRoutingModule } from './app-routing.module';

// wh components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesOverviewComponent } from './components/recipes/recipes-overview/recipes-overview.component';
import { RecipesOverviewItemComponent } from './components/recipes/recipes-overview/recipes-overview-item/recipes-overview-item.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RecipesOverviewComponent, RecipesOverviewItemComponent, HeaderComponent, HeaderLogoComponent, HeaderNavComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    StoreModule.forRoot({}, {}), 
    AppRoutingModule, 
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FlexLayoutModule
  ],
    
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
