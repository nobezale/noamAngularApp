import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
 
const appRoute:Routes=[
  {path:"about", component:AboutComponent},
  {path:"products", component:ProductsComponent},
  {path:"product/:id", component:ProductComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
