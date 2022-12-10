import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/review/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  private baseUrl ='http://localhost:8083/api/tutorials';

  

 
  addReview(Review:any) :Observable<any>{
   
 

    let review ={
        "title" : Review.doctorName,
        "description": (Review.review)
    };

    let rm= JSON.stringify(review);
    console.log("In Review Service:",rm);
    return this.http.post(`${this.baseUrl}`,review);
  }

  updateAppointment(id:number,Appointment:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,Appointment);
  }

  deleteAppointment(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllAppointment():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getAppointmentById(id:string) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  checkIsAvailable(Appointment:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/check`, Appointment);
  }

  getAllReviews(name:string) :Observable<any>{
    console.log("Service: ",name);
    console.log(`${this.baseUrl}/${name}`);
    return this.http.get(`${this.baseUrl}/${name}`); 
  }
}