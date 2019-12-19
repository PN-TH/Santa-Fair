import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  isEnergy : boolean;
  isDetachedPieces: boolean;
  isRecyclable : boolean;

  constructor(private articleService : ArticleService, private router: Router) { }

  ngOnInit() { this.getArticle()
  }

  getArticle(){
    this.articleService.getArticles().subscribe(  (response : any) => {
      this.articleService.articles = response;
    })
  }
    addWishlist() {
      this.articleService.wishlistArticle.push(this.articleService.selectedArticle)
      this.articleService.total = this.articleService.wishlistArticle.length
      console.log(this.articleService.total)
    }

  

  addReview() {
    //console.log(this.articleService.selectedArticle)
  }

}
