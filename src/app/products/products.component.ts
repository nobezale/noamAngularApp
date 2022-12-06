import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItem } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private route:Router){}
  goToProduct(product:ProductItem){
  this.route.navigate(['/product/'+product.id,{id:product.id,name:product.name,img:product.img,price:product.price}]);
  }
   productsList:ProductItem[] = [
    { id: "12", name: 'Milk', img:"https://d2wwnnx8tks4e8.cloudfront.net/images/app/large/5011056020053_3.JPG",price:5 },
    { id: "13", name: 'Chocklate' ,img:"https://upload.wikimedia.org/wikipedia/commons/3/34/Chocolate02.jpg",price:7 },
    { id: "14", name: 'Potato' ,img:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",price:2 },
    { id: "15", name: 'Apple',img:"https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg",price:8  },
  ];



}
