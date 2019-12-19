import { Component, OnInit, ɵConsole } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';


@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})

export class UserReviewComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {this.getCommentsByArticle()
  }

  getCommentsByArticle() {
    this.articleService.getCommentsByArticles(this.articleService.selectedArticle.id).subscribe((response : any) => {

      this.articleService.comments = Object.values(response);
    })
  }
}
