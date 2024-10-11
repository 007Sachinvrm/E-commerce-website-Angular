import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { subscribe } from 'diagnostics_channel';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType: string= 'default';
  sellerName: string='';
  searchResult: undefined | product[];

  constructor(private route: Router, private product: ProductsService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any)=>{
      if(val.url){
        if( localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        }else{
          this.menuType = 'default';
        }
      }
    })
  }

  userLogout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  searchProduct(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
        // console.log(result);
        if(result.length>7){
          result.length=length
        }
        this.searchResult=result;
        // console.log("iie",this.searchResult)
      })
    }
  }

  hideSearch(){
    this.searchResult=undefined;
  }

  submitSearch(val: string){
    // console.log(val);
    this.route.navigate([`search/${val}`]);
  }
}
