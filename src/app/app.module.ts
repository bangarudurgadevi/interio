import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './navigatingcomponents/categories/categories.component';
import { FurnitureComponent } from './navigatingcomponents/furniture/furniture.component';
import { InteriordesignComponent } from './navigatingcomponents/interiordesign/interiordesign.component';
import { PropertyComponent } from './navigatingcomponents/property/property.component';
import { HomeComponent } from './navigatingcomponents/home/home.component';
import { BannerComponent } from './navigatingcomponents/home/banner/banner.component';
import { CategoryComponent } from './navigatingcomponents/home/category/category.component';
import { WeekendComponent } from './navigatingcomponents/home/weekend/weekend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    FurnitureComponent,
    InteriordesignComponent,
    PropertyComponent,
    HomeComponent,
    BannerComponent,
    CategoryComponent,
    WeekendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
