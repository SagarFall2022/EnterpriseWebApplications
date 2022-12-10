import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import { FindComponent } from './find/find.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListOfPlacesComponent } from './list-of-places/list-of-places.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DoctorComponent } from './doctor/doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatMenuModule } from '@angular/material/menu';
import { FinddoctorComponent } from './finddoctor/finddoctor.component'; 
import { PlacesService } from './places.service';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { BarChartComponent } from './yelp-reviews-chart/yelp-reviews-bar-chart.component';
import { ReviewComponent } from './review/review.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    FindComponent,
    ListOfPlacesComponent,
    DoctorComponent,
    AppointmentComponent,
    FinddoctorComponent,
   MapComponent,
   BarChartComponent,
   ReviewComponent,
   ViewreviewComponent
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANho3VyRDhrNN62QJqNJrQUXyHoTqoBN4'
    })
    
  ],
  providers: [PlacesService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
