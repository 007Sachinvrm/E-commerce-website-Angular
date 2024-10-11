import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProduct: undefined | product[];
  trendyProducts: undefined | product[];

  

  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      // console.log("data-->",data)
      this.popularProduct=data;
    });
    this.product.trendyProducts().subscribe((data)=>{
      // console.log("data-->",data)
      this.trendyProducts=data;
    });
  }

}
