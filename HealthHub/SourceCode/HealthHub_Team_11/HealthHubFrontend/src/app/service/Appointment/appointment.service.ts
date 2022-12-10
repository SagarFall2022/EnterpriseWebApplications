import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  private baseUrl ='http://localhost:8080/hms/api/appointment';
 
  addAppointment(Appointment:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,Appointment);
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

  getAppointmentById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  checkIsAvailable(Appointment:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/check`, Appointment);
  }
}