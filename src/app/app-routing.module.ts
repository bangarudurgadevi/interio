import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigatingcomponents/home/home.component';
import { CategoriesComponent } from './navigatingcomponents/categories/categories.component';
import { FurnitureComponent } from './navigatingcomponents/furniture/furniture.component';
import { InteriordesignComponent } from './navigatingcomponents/interiordesign/interiordesign.component';
import { PropertyComponent } from './navigatingcomponents/property/property.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'furniture', component:FurnitureComponent },
  { path: 'interiordesign', component: InteriordesignComponent },
  { path: 'property', component: PropertyComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
