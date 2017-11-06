import { Component, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router'
import { IProduct } from './product';
import {ProductService} from './product.service';

@Component({
    templateUrl: './product-reg.component.html',
  
    providers:[ProductService]
    
})

export class ProductRegComponent{
products:IProduct;
ngOnInit():void{
    this.products=<IProduct>{
       
        platoNombre: "",
        platodescrip: "",
        platoprice: 0,
        imageUrl: "",
    }
}

constructor(private _productService:ProductService){

}
Registrar(){
    
   let respuesta= this._productService.regProducts(this.products);
   console.log("respuesta",respuesta);
   
}

}