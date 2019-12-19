import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  isEnergy : boolean;
  isDetachedPieces: boolean;
  isRecyclable : boolean;

  constructor(private articleService : ArticleService) { }

  ngOnInit() { this.getArticle()
  }

  getArticle(){
    this.articleService.getArticles().subscribe(  (response : any) => {
      this.articleService.articles = response;
    })

  }

}
