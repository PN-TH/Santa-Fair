import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/article';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  isEnergy : boolean;
  isDetachedPieces: boolean;
  isRecyclable : boolean;
  alternative : Article;

  constructor(private articleService : ArticleService, private router: Router) { }

  ngOnInit() { this.getArticle()
    this.getComposition();
    this.isAlternative();
    this.getComposition()
    this.getPlaces()
  }

  getArticle(){
    this.articleService.getArticles().subscribe(  (response : any) => {
      this.articleService.articles = response;
    })
  }

  getPlaces(){
    this.articleService.getPlaces().subscribe((response:any)=>
    this.articleService.places = response)
  }

  getComposition(){
    this.articleService.getCompos().subscribe((response: any) => {
      this.articleService.compositions = response
    })
  }
    addWishlist() {
      this.articleService.wishlistArticle.push(this.articleService.selectedArticle)
      this.articleService.total = this.articleService.wishlistArticle.length
      console.log(this.articleService.total)
    }
  isAlternative(){
    for(let article of this.articleService.articles){
      if(article.note_SF >this.articleService.selectedArticle.note_SF && article.category_id===this.articleService.selectedArticle.category_id){
        this.alternative = article;
      }
    }
  }
}
