import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;
  iconTrash = faTrash;
  iconEdit = faEdit;

  constructor(private product: ProductsService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.product.productList().subscribe((result) => {
      console.log(result);
      this.productList = result;
    });
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      console.log(result);
      if (result) {
        this.productMessage = 'Product is deleted';
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
