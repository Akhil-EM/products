import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddProductsComponent} from './add-products/add-products.component'
import{ListProductsComponent} from './list-products/list-products.component'
import{ EditProductComponent } from './edit-product/edit-product.component'
import{SignUpComponent} from './sign-up/sign-up.component'
import{LoginAppComponent} from './login-app/login-app.component'
const routes: Routes = [{path:"",component:ListProductsComponent},{path:"addproduct",component:AddProductsComponent},
{path:"editproduct",component:EditProductComponent},{path:"signup",component:SignUpComponent},
{path:"login",component:LoginAppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
