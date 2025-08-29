import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { CategoriesBannerComponent } from './navigatingcomponents/categories/categories-banner/categories-banner.component';
import { CategoriesCardsComponent } from './navigatingcomponents/categories/categories-cards/categories-cards.component';
import { Navbar1Component } from './navigatingcomponents/categories/navbar1/navbar1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Banner2Component } from './navigatingcomponents/interiordesign/banner2/banner2.component';
import { ProductdetailsComponent } from './navigatingcomponents/interiordesign/productdetails/productdetails.component';
import { RegisterComponent } from './navigatingcomponents/register/register.component';
import { OrdersComponent } from './navigatingcomponents/orders/orders.component';







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
    WeekendComponent,
    CategoriesBannerComponent,
    CategoriesCardsComponent,
    Navbar1Component,
    Banner2Component,
    ProductdetailsComponent,
    RegisterComponent,
    OrdersComponent,
   
    
   
    
    
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
