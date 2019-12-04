import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import{Eproducts} from '../list-products/Products.model'
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
    log_data;
    item_data;
    productItem=new Eproducts(null,null,null,null,null,null,null,null);
  constructor(public router:Router) { 
    this.log_data=this.router.getCurrentNavigation().extras.state.example; // should log out 'bar'
  }

  ngOnInit() {
    
    console.log(this.log_data);
     this.item_data=this.log_data;
  }
}
