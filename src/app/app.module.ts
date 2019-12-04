import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AppHeaderComponent } from './app-header/app-header.component';
/////creating http module 
import {HttpClientModule} from'@angular/common/http';

///improting ng module
import{ FormsModule } from '@angular/forms';
import { LoginAppComponent } from './login-app/login-app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditProductComponent } from './edit-product/edit-product.component'
@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    AddProductsComponent,
    AppHeaderComponent,
    LoginAppComponent,
    SignUpComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
