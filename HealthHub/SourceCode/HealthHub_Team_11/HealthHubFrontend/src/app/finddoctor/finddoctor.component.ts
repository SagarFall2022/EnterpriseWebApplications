import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';
import { ReviewService } from '../service/Review/review.service';
import { Doctor } from './Doctor';

@Component({
  selector: 'app-finddoctor',
  templateUrl: './finddoctor.component.html',
  styleUrls: ['./finddoctor.component.css']
})
export class FinddoctorComponent implements OnInit{

  title = 'autocomplete';

  options = ["Sam", "Varun", "Jasmine"];

  filteredOptions;
  formGroup: FormGroup;
  response:String;
  response1:any[];

  constructor( private service : ServService,private fb : FormBuilder, private router :Router, private review:ReviewService){}

  ngOnInit(){
    this.initForm();
    this.getNames();
  }

  initForm(){
    this.formGroup = this.fb.group({
      'doctor' : ['']
    })

    this.formGroup.get('doctor')?.valueChanges.subscribe(response=>{
      console.log("Response in Init",response);
      this.response= response;
      this.filterData(response);
    })
  }

    getNames(){
      this.service.getData().subscribe(response => {
        this.options = response;
        console.log("Response in getNames",response);
        this.filteredOptions = response;
      
      })
    }
    getValue(value){
       
      console.log("value: ",this.response);
       

       this.service.getData1(this.response).subscribe(response => {
       this.response1=[response];
       console.log("ResponseID:", this.response1);
      
      })

    }

    filterData(enteredData){

      this.filteredOptions = this.options.filter(item => {
        return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
      })
    }

    
  getAppointment(id: number) {
    this.router.navigate(['bookapt', id]);
  }

  putreview(id: string){
    this.router.navigate(['review',id]);
    
  }

  getreview(name: string){
    this.router.navigate(['viewreview',name]);
    
  }

}
