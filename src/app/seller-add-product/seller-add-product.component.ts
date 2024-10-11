import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductMessage : string | undefined;

  constructor(private product: ProductsService) { }

  ngOnInit(): void {
  }

  submit(data: product): void{
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.addProductMessage = "Product Added Successfully";
      }
      setTimeout(()=>(this.addProductMessage = undefined), 3000);
    })
  }

}
