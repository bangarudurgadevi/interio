import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  successmessage = "";
  errormessage = "";
  orderform = this.fb.group({
    ordername: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    orderaddress: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    orderpincode: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]],
    ordercountry: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(30)]],
    orderstate: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(40)]],
    ordermobilenumber: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(12)]]
  });
  constructor(private service:OrdersService, private fb:FormBuilder,private router:Router) { }
  onsubmit() {
    if (this.orderform.valid) {
      this.service.orderuser(this.orderform.value).subscribe({
        next:()=>{
          this.successmessage="order successful";
          this.orderform.reset();
        

          

         
        },
        error:()=>{
          this.errormessage="something went wrong try again";


        }
      })
    }
    else {
      this.errormessage = "please fill all required fields correctly";
    }
  }

}
