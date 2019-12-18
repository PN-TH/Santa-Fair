import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReviewService } from 'src/app/shared/review.service';
import { Review } from 'src/app/shared/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewForm = new FormGroup({
    review: new FormControl(''),
    note: new FormControl('')
  });
  note: number;
  newComment: Review = new Review;

  rating : any = [{nom: '☆'},{nom: '☆'},{nom: '☆'},{nom: '☆'},{nom: '☆'}];

  constructor(private reviewService : ReviewService) { }

  ngOnInit() {
    this.getComments();
    this.addComment();
  }


  ratingStar(star) {
    for (let i = 0; i <= 4; i++) {
      this.rating[i].isSelected = false;
    }
    for (let i = 0; i <= this.rating.indexOf(star); i++) {
      this.rating[i].isSelected = true;
    }
    this.note = this.rating.indexOf(star) + 1;
  }

  getComments() {
      this.reviewService.getComments().subscribe((response : any) => {
        this.reviewService.comments = response;
      })
  }

  addComment(){
    let newComment = {
    commentaire : this.reviewForm.value.review,
    note : this.note
    }
    this.reviewService.addComment(newComment).subscribe(
      result=>{
        console.log(result)
      }
    ); 
  }
   

}
