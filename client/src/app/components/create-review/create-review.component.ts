import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Review } from 'src/app/shared/review';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {

  reviewForm = new FormGroup({
    review: new FormControl(''),
  });

  note: number;
  newComment: Review ;

  rating : any = [{nom: 'C'},{nom: 'C'},{nom: 'C'},{nom: 'C'},{nom: 'C'}];

  constructor(private articleService : ArticleService, private router: Router) { }

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
    console.log(this.note)
  }

  getComments() {
      this.articleService.getComments().subscribe((response : any) => {
        this.articleService.comments = response;
      })
  }

  addComment(){
    
    this.newComment.commentaire = this.reviewForm.value.review,
    this.newComment.note = this.note
    console.log(this.note)
    
    this.articleService.addComment(this.newComment).subscribe(
      result=>{
        //console.log(result)
      }
    ); 
    //this.router.navigate(['/avis']);
  }

}




