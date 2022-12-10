import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../place';
import { PlacesService } from '../places.service';

interface Location {
  lat: number;
  lng: number;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  label: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{
  places: Place[]=[];
  circleRadius:number = 5000;
  uri = 'http://localhost:4000';
  location: Location={
    lat: 41.882607,
    lng: -87.643548,
    label: 'You are Here',
    zoom: 13
  }
  

  // icon = { url: '../../assets/Image/login.jpg', scaledSize: { width: 60, height: 60}}
  
  displayedColumns = ['name', 'display_phone', 'address1', 'is_closed', 'rating','review_count','latitude','longitude'];

  constructor(private placesService: PlacesService, private router: Router, private http: HttpClient){}
  ngOnInit() {
    this.fetchPlaces();
  }



  fetchPlaces() {
    this.placesService
      .getPlaces()
      .subscribe((data: Place[]) => {
        this.places = data;
      });
  }

  clickedMarker(label: string, index: number) {

    console.log(`clicked the marker: ${label || index}`)
    
  }
  
}
