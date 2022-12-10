import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../service/Review/review.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css']
})
export class ViewreviewComponent implements OnInit {
  
  //name: any;
  data=[];
  name="Joaquin Brieva, MD";
  private sub: any;


  constructor(private router: Router, private rs: ReviewService,private route: ActivatedRoute, private tss: TokenStorageService,
    private renderer: Renderer2){}
  
  
  ngOnInit(){
    this.sub=this.route.params.subscribe(params=>{
      this.name= params['name'];
      console.log("Doctor Name:",this.name);
    });

    this.getreview();
  }

  viewreview(){

    console.log("View Review Component",this.name);

   this.rs.getAllReviews(this.name);
    

  }
  getreview(){

   this.rs.getAllReviews(this.name).subscribe((data)=>{
    console.log(data);
    this.data = data;
     
      },error => {
        console.log(error);
        alert('can not save your data');
        });;
    
  }




  

}
