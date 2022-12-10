import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../service/Review/review.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Review } from './Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  btn='save';
  id: string;
  private sub: any;
  Review : Review = new Review();

  constructor(private router: Router, private rs: ReviewService,private route: ActivatedRoute, private tss: TokenStorageService,
    private renderer: Renderer2){}

  ngOnInit(){
    this.sub=this.route.params.subscribe(params=>{
      this.id= params['id'];
      console.log("Doctor Name:",this.id);
    });
}

onSubmit(){

  this.Review.doctorName=this.id;
  this.save();
  
}

save(){
  this.rs.addReview(this.Review).subscribe((data)=>{
    console.log(data);
      alert("Review added successfully");
      this.gotoNext();
      },error => {
        console.log(error);
        alert('can not save your data');
        });
        }
         gotoNext(){
        this.router.navigate(['finddoctor']);
          }

          
}


