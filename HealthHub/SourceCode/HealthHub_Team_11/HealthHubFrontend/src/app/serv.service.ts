import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Doctor } from './doctor/Doctor';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get<any>('http://localhost:8080/hms/api/doctor')
      .pipe(
        map((response:[]) => response.map(item => item['doctorName']))
      )
  }

  getData1(name){
    console.log("Service Class",name);
    return this.http.get<any>(`http://localhost:8080/hms/api/doctor/name/${name}`);

  }
}