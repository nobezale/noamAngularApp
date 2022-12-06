import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export interface ProductItem{
  id:string | null,
  name:string | null,
  img:string | null,
  price:number | null,
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(  
    private route: ActivatedRoute,
    ) { }
    f(){
      console.log("savta");
     let object1=this.route.snapshot.paramMap.get('id');
  console.log(this.route.snapshot.paramMap.get('id'));

    }
     currentProduct:ProductItem={
      id:this.route.snapshot.paramMap.get('id'),
      name:this.route.snapshot.paramMap.get('name'),
      img:this.route.snapshot.paramMap.get('img'),
      price:Number(this.route.snapshot.paramMap.get('price'))
    }
  // currentProduct:string=this.router.getCurrentNavigation().extras.product
}
