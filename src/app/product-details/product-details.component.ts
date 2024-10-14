import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private product: ProductsService) { }

  productData: undefined | product;
  productQuantity: number=1;

  ngOnInit(): void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    // console.log(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      // console.log(result);
      this.productData= result;

    })
  }

  handleQuantity(val: string){
    // console.log(val);
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+= 1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-= 1;
  }
}

addToCart(){
  if(this.productData){
    this.productData.quantity = this.productQuantity;
    // console.log(this.productData);
    if(localStorage.getItem('user')){
      this.product.localAddToCart(this.productData);
    }
  }
}

}
