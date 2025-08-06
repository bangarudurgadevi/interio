import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
 cards=[
  {
    src:"../../../../assets/home/categories/chair.png",
    alt:""
  },
  {
    src:"../../../../assets/home/categories/cabinet.png",
    alt:""
  },
  {
    src:"../../../../assets/home/categories/table.png",
    alt:""
  },
  {
    src:"../../../../assets/home/categories/lamp.png",
    alt:""
  }
 ]

}
