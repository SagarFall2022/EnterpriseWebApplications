import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  username: string="";
  constructor(private router: Router, private tokenStorage: TokenStorageService) { }
  
  ngOnInit(): void {
    if (this.isLoggedIn1()) {
      const user = this.tokenStorage.getUser();
      this.username = user.username;
      console.log("username is ",this.username);
    }
    else{
      this.router.navigate(['login']);
    }
  }
  public isLoggedIn1(){
    this.isLoggedIn = !!this.tokenStorage.getUser();
    return this.isLoggedIn;
  }

  public logOut(){
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
  }

}