import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';
import { isError } from 'util';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  
  showLogin = false;
  authError: string = '';
   
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(sellerSignUp: signUp): void {
    this.seller.userSignUp(sellerSignUp);
  }

  login(sellerLogin: signUp): void {
    this.authError="";
    this.seller.userLogin(sellerLogin); 
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = 'Invalid username or password';
      }
    })
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignup() {
    this.showLogin = false;
  }
}
