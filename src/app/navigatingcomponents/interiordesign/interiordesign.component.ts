import { Component, OnInit } from '@angular/core';
import { Interiodesign } from 'src/app/models/interiodesign';
import { InteriodesignService } from 'src/app/services/interiodesign.service';

@Component({
  selector: 'app-interiordesign',
  templateUrl: './interiordesign.component.html',
  styleUrls: ['./interiordesign.component.css']
})
export class InteriordesignComponent implements OnInit {
  products: Interiodesign[] = [];
  filterproducts: Interiodesign[] = [];
  categories: string[] = [];
  selectedcategory: string = '';
  selectedprice: string = '';
  searchitem: string = '';

  constructor(private service: InteriodesignService) { }

  ngOnInit(): void {
    this.service.getproducts().subscribe(data => {
      this.products = data;
      this.filterproducts = data;
      this.categories = [...new Set(data.map(p => p.category))];
    });
  }

  filter(): void {
    this.filterproducts = this.products.filter(product => {
      const matchcategory = this.selectedcategory ? product.category === this.selectedcategory : true;
      const matchprice = this.selectedprice ? +product.price <= +this.selectedprice : true;
      const matchsearch = this.searchitem ? product.name.toLowerCase().includes(this.searchitem.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchitem.toLowerCase()) : true;
      return matchcategory && matchprice && matchsearch;
    });
  }

  resetfilter(): void {
    this.selectedcategory = '';
    this.selectedprice = '';
    this.searchitem = '';
    this.filterproducts = [...this.products];
  }
}
