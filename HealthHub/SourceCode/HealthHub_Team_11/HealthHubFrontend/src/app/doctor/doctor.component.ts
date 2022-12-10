import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../service/Doctor/doctor.service';
import { LoginService } from '../service/login/login.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Doctor } from './Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
 
  doc : Doctor = new Doctor();
  btn = 'save';
  desc: string='';
  docList?: Doctor[];
  id;
  constructor(private router: Router, private ds: DoctorService,private route: ActivatedRoute, private tss: TokenStorageService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    if(this.tss.getToken()){
      this.getList();
    }
    else if(this.route.snapshot.params['id'] > 0){

      this.btn = 'Update';
        this.id = this.route.snapshot.params['id'];
        this.getDoctor1();


    }
    
    else{
      this.router.navigate(['login']);
    }
  }

  getList() {
    this.ds.getAllDoctor().subscribe((list) => {
      this.docList = list;
    },
      error => {
        console.log(error);
      });

  }

  getDoctor(id: number) {
    this.router.navigate(['doctorUpdate', id]);
  }

  getAppointment(id: number) {
    this.router.navigate(['bookapt', id]);
  }

  getDoctor1(){
    this.ds.getDoctorById(this.id).subscribe((data)=>{
      this.doc=data;
    },
    error=>{
      console.log(error);
    });
  }

  

}
