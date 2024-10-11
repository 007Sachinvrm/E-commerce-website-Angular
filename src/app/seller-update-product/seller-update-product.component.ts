import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  updateProductMessage: undefined | string;
  productData: undefined | product;

  constructor(private route: ActivatedRoute, private product: ProductsService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    // console.log(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{
      // console.log(data);
      this.productData= data;
    })
  }

  submit(data : product){
    if(this.productData){
      data.id = this.productData.id;
    }
    // console.log("submit button clicked",data);
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.updateProductMessage= "Product has Updated";
      }
    });
    setTimeout(()=>{
      this.updateProductMessage= undefined
    },3000);
  }
}
