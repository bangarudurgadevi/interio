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
  currentpage=1;
  pagesize=8;
  totalpages=0;
  pageproducts:any[]=[];

  constructor(private service: InteriodesignService) { }

  ngOnInit(): void {
    this.service.getproducts().subscribe(data => {
      this.products = data;
      this.filterproducts = data;
      this.categories = [...new Set(data.map(p => p.category))];
      this.updatepage();
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
    this.updatepage();
  }

  resetfilter(): void {
    this.selectedcategory = '';
    this.selectedprice = '';
    this.searchitem = '';
    this.filterproducts = [...this.products];
    this.updatepage();
  }
  updatepage(){
    this.totalpages=Math.ceil(this.filterproducts.length /this.pagesize);
    const startindex=(this.currentpage -1)*this.pagesize;
    const endindex=startindex+this.pagesize;
    this.pageproducts=this.filterproducts.slice(startindex,endindex);

  }
  nextpage(){
    if(this.currentpage < this.totalpages){
      this.currentpage++;
      this.updatepage();
    }
  }
  previouspage(){
    if(this.currentpage > 1){
      this.currentpage--;
      this.updatepage();
    }
  }
}