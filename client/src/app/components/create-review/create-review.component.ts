import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Review } from 'src/app/shared/review';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {
  articleId : number;
  reviewForm = new FormGroup({
    author: new FormControl(''),
    review: new FormControl(''),
  });


  note: number;
  newComment: Review = new Review();

  rating : any = [{nom: 'C'},{nom: 'C'},{nom: 'C'},{nom: 'C'},{nom: 'C'}];

  constructor(private articleService : ArticleService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  
   this.route.paramMap.subscribe((params: ParamMap) => {
    this.articleId = parseInt(params.get('articleId'));
  });

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

/*   getComments() {
      this.articleService.getComments().subscribe((response : any) => {
        this.articleService.comments = response;
      })
  } */

  addComment(){
    this.newComment.commentaire = this.reviewForm.value.review;
    this.newComment.note = this.note;
    this.newComment.article_id = this.articleService.selectedArticle.id;
    console.log(this.newComment.commentaire)
    console.log(this.newComment.note)
    console.log(this.newComment.id)
    
    this.articleService.addComment(this.newComment).subscribe(
      result=>{
        console.log(result)
      }
    ); 
    this.router.navigate(['/details']);
  }

}




