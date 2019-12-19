import { Component } from '@angular/core';
import { ArticleService } from './shared/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';



  constructor(private articleService: ArticleService) { }
  
  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((response:any) => {
      this.articleService.articles = response;
    })
  };

  deleteWish(i){
    this.articleService.wishlistArticle.splice(i, 1)
    this.articleService.total--
    console.log(this.articleService.total)
  }
}
