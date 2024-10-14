import { Component, OnInit } from '@angular/core';
import { login, signUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin= false;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: signUp): void {
    this.user.userSignup(data);
  }

  login(data: login): void{
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result)=>{
      if(result){
        alert('Invalid username or password');
        }
    })
  }

  openLogin(){
    this.showLogin = true;
  }

  opensignup(){
    this.showLogin = false;
  }

}
