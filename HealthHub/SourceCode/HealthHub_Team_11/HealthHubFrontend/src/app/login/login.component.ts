import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myImage:string ="assets/Image/image.jpg";
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private ls: LoginService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    //   this.gotoIndex();
    // }
  }
  doLogin(): void {
    console.log(this.form);
    this.ls.login(this.form).subscribe({
     next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        alert('Logged In as ' + this.roles);
        this.gotoIndex();
      },
      error:(err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        alert('Login Failed + ' + this.errorMessage);
      }
    });
  }
  gotoIndex(){
    this.router.navigate(['home']);
  }
  navigateToSignUp(){
    this.router.navigate(['signup']);
  }

}
