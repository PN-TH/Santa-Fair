import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((response:any) => {
      this.articleService.articles = response;
    })
  };

  deleteWish(a){
    this.articleService.wishlistArticle.splice(a, 1)
    console.log(this.articleService.wishlistArticle)
  }

}
