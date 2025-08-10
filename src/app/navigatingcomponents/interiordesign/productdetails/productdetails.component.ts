import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteriodesignService } from 'src/app/services/interiodesign.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  product!:any;
  isloading=true;
  constructor(private service:InteriodesignService,private route:ActivatedRoute){

  }
ngOnInit():void{
  const productid=this.route.snapshot.paramMap.get('id');
  if (productid){
    this.service.getproducts().subscribe(data =>{
     this.product = data.find(p => p.id === Number(productid));
     this.isloading=false;
    })
  }
}
 

}
