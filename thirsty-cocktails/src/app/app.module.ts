import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './components/card/card.component';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { CocktailComponent } from './pages/cocktail/cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    ToolbarComponent,
    SelectorComponent,
    ClickOutsideDirective,
    CardComponent,
    CocktailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
