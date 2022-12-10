import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FindComponent } from './find/find.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ListOfPlacesComponent } from './list-of-places/list-of-places.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ReviewComponent } from './review/review.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';
import { BarChartComponent } from './yelp-reviews-chart/yelp-reviews-bar-chart.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'index', component:IndexComponent},
  {path:'signup', component:SignUpComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'find', component:FindComponent},
  {path:'list_of_places',component:ListOfPlacesComponent},
  {path:'doctor',component:DoctorComponent},
  { path: 'doctorUpdate/:id' , component: DoctorComponent},
  { path: 'bookapt/:id' , component: AppointmentComponent},
  {path: 'finddoctor', component:FinddoctorComponent},
  {path: 'map', component:MapComponent},
  
   {path:'yelp_reviews_chart',component:BarChartComponent},
   {path:'review/:id',component:ReviewComponent},
   {path:'viewreview/:name', component:ViewreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ 



}
