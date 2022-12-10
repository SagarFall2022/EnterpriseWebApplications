import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthHubFrontend';
  isLogin: boolean = false;
  myImage:string ="assets/Image/image.jpg";
  ngOnInit(){
  }
}
