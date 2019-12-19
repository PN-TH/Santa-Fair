import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';


@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})

export class UserReviewComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  getCommentsById(id) {
    if (this.articleService.selectedArticle){
      this.articleService.getCommentsById(this.articleService.selectedArticle.id).subscribe((response : any) => {
        this.articleService.comments = response;
      })
    }
  }
}
