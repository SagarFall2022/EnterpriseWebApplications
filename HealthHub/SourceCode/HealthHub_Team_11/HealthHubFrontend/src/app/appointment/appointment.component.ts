import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppointmentService } from '../service/Appointment/appointment.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Appointment } from './appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
form: any = {};
btn='save';
 id: number;
 isSuccessful = false;
 isApptBookd=false;
 errorMessage = '';
 aptid:number;
 appt: Appointment= new Appointment();
 private sub: any;
 constructor(private router: Router, private as: AppointmentService,private route: ActivatedRoute, private tss: TokenStorageService,
  private renderer: Renderer2){}

 ngOnInit(){
  this.sub=this.route.params.subscribe(params=>{
    this.id= +params['id'];
  }
    
    
    );


  
}


  onSubmit(){
	   if(this.aptid>0){
       this.update();
       this.isSuccessful=true;
     }else{
         this.appt.doctorid=this.id.toString();
         this.save();
         this.isSuccessful=true;
        }
    //this.isSuccessful=true;

    
   




  }

  update()
  {
    this.as.updateAppointment(this.aptid, this.appt).subscribe((data)=>
      {
        console.log(data);
        alert("Appointment updated successfully");
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert("can't update your data");
      });
  }


  save(){
   this.as.addAppointment(this.appt).subscribe((data)=>{
   console.log(data);
     alert("Appointment added successfully");
     this.gotoNext();
     },
   error => {
   console.log(error);
   alert('can not save your data');
   });
   }
    gotoNext(){
   this.router.navigate(['AppointmentList']);
     }
    


}
